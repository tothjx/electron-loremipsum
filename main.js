const electron = require('electron');
const {app, Tray, Menu} = electron;
const WindowMan = require('./script/WindowMan');
const wm = new WindowMan(); // window manager
const cfg = require('./script/config');

let win;
let tray;
let isQuiting = false;

app.disableHardwareAcceleration();
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;

app.on('ready', function(){
	tray = new Tray(cfg.TRAY_ICON);
	tray.setContextMenu(Menu.buildFromTemplate([
		{
			label: 'Show application', click: function () {
				win.show();
			}
		},
		{
			label: 'Quit', click: function () {
				isQuiting = true;
				app.quit();
			}
		}
	]));

	win = wm.createWindow();
	wm.renderContent(win, 'main');

	win.once('ready-to-show', () => {
		win.show();
	});

	win.on('minimize', function(event) {
		winToTray(event);
	});

	win.on('closed', function() {
		app.quit();
	});
});

winToTray = (event) => {
	if (!isQuiting) {
		event.preventDefault();
		win.hide();
		event.returnValue = false;
	}
}
