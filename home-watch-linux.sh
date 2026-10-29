#!/usr/bin/env bash
# Run home-watch.py in the background on Linux using systemd:
# starts at login and restarts if it stops.
#
#   TV_HOST=192.168.1.50 ./home-watch-linux.sh          # install / update
#   ./home-watch-linux.sh uninstall
#
# Log: ~/.local/state/tv-vibehack-home-watch.log

set -euo pipefail

cd "$(dirname "$0")"
APP_DIR="$PWD"

SERVICE="tvvibehack-homewatch.service"
SERVICE_DIR="$HOME/.config/systemd/user"
SERVICE_FILE="$SERVICE_DIR/$SERVICE"
LOG="$HOME/.local/state/tv-vibehack-home-watch.log"

systemctl --user stop "$SERVICE" 2>/dev/null || true
systemctl --user disable "$SERVICE" 2>/dev/null || true

if [ "${1:-}" = uninstall ]; then
    rm -f "$SERVICE_FILE"
    systemctl --user daemon-reload
    echo "Removed."
    exit 0
fi

: "${TV_HOST:?set TV_HOST to the TV IP address, e.g. TV_HOST=192.168.1.50 $0}"

[ -x venv/bin/python ] || python3 -m venv venv
venv/bin/pip install -q websockets

mkdir -p "$SERVICE_DIR"
mkdir -p "$(dirname "$LOG")"

cat > "$SERVICE_FILE" <<EOF
[Unit]
Description=TV VibeHack Home Watch
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
WorkingDirectory=$APP_DIR
ExecStart=$APP_DIR/venv/bin/python -u $APP_DIR/home-watch.py $TV_HOST
Restart=always
RestartSec=2

StandardOutput=append:$LOG
StandardError=append:$LOG

[Install]
WantedBy=default.target
EOF

systemctl --user daemon-reload
systemctl --user enable --now "$SERVICE"

echo "Running. Press Home on the remote."
echo "Log: $LOG"
