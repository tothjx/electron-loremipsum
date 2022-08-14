const electron = require('electron');
const {app, ipcMain} = electron;
const WindowMan = require('./script/WindowMan');
const wm = new WindowMan(); // window manager

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;

let win; // main BrowserWindow

app.on('ready', function(){
	win = wm.createWindow();
	wm.renderContent(win, 'main');

	// show window
	win.once('ready-to-show', () => {
		win.show();
	});

	// close app
	win.on('closed', function() {
		app.quit();
	});
	
	// win.webContents.openDevTools();
});

