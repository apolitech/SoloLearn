const electron = require('electron');
const { shell, app, BrowserWindow } = electron;
const HOMEPAGE = 'https://www.sololearn.com/'

let mainWindow;

app.on('ready', () => {
    window = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
          nodeIntegration: false
        }
    });
    window.setMenuBarVisibility(true);
    window.loadURL(HOMEPAGE);

    window.on('closed', () => {
        window = null;
    });
});
