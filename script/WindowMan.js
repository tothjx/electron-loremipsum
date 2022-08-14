const electron = require('electron');
const {BrowserWindow} = electron;
const cfg = require('./config');

module.exports = class WindowMan {
	constructor() {
		// init
		this.win = null;
		this.ctrl = (process.platform == 'darwin') ? 'Command' : 'Ctrl';
	}

	createWindow() {
		return this.win = new BrowserWindow({
			title: cfg.WIN_TITLE,
			icon: cfg.WIN_ICON,
			width: cfg.WIN_WIDTH,
			height: cfg.WIN_HEIGHT,
			minWidth: cfg.WIN_MIN_WIDTH,
			minHeight: cfg.WIN_MIN_HEIGHT,
			resizable: cfg.WIN_RESIZEABLE,
			center: cfg.WIN_CENTER,
			frame: cfg.WIN_FRAME,
			autoHideMenuBar: cfg.WIN_HIDE_MENU,
			show: false,
			webPreferences: {
				nodeIntegration: true,
				contextIsolation: false,
				enableRemoteModule: true,
			},
			globals: {
				title: cfg.WIN_TITLE,
				author: cfg.AUTHOR,
				version: cfg.VERSION
			}
		});
	}

	renderContent(win, file) {
		// TODO: check file path
		if (file === '' || file === undefined || file === null) {
			file = cfg.HTML_FILE_MAIN;
		}

		return win.loadURL(`file://${__dirname}/../html/${file}.html`);
	}

	// end
}
