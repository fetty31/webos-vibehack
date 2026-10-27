// Launcher configuration. Edit this file, then run webos-launcher/install.sh.
// App ids: run `python3 sync-apps.py --list` (or look in app/apps.js after a sync).
window.CONFIG = {
  // Apps pinned to the dock row at the bottom, in this order. Missing apps are skipped.
  dockApps: ['netflix', 'amazon', 'youtube.leanback.v4', 'hotstar'],

  // Apps never shown as tiles (inputs and Live TV are already in the Inputs menu).
  hiddenApps: [
    'com.gathin.tvhome',
    'com.webos.app.livetv',
    'com.webos.app.hdmi1', 'com.webos.app.hdmi2', 'com.webos.app.hdmi3', 'com.webos.app.hdmi4',
    'com.webos.app.lgchannels',   // LG Channels
    'shortcutcopilot'             // Copilot
  ],

  // The Live TV app, offered at the end of the Inputs menu. Leave empty to omit.
  liveTvApp: 'com.webos.app.livetv',

  // Tiles per row in the grid; the dock always has this many slots.
  columns: 4,

  // Background carousel: images from app/media/ (or anywhere in the app folder), listed here
  // relative to index.html, shown in order and looping. Empty keeps the plain black background.
  //   backgrounds: ['media/sunset.jpg', 'media/mountains.jpg'],
  backgrounds: ['media/guim_mama.jpeg', 'media/guim_uri.jpeg', 'media/guim_uri_birra.jpeg', 'media/guim_uri_dolors.jpeg', 'media/guim_uri_mama_muntanya.jpeg', 'media/guim_uri_papa.jpeg', 'media/iaia.jpeg', 'media/mama_papa.jpeg', 'media/mama_papa_2.jpeg', 'media/mes_petons.jpeg', 'media/nosaltres_dijon.jpeg', 'media/papa_fumant_puro.jpeg', 'media/papa_mama.jpeg', 'media/petons.jpeg', 'media/prismatics.jpeg', 'media/tots.jpeg', 'media/uri_guim.jpeg', 'media/uri_guim_2.jpeg', 'media/uri_guim_mama.jpeg', 'media/uri_mama.jpeg'],
  backgroundSeconds: 20,      // seconds each image stays on screen

  // The clock, greeting and date use this zone (Madrid and Paris share CET/CEST).
  timeZone: 'Europe/Madrid'
};
