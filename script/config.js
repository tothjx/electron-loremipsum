module.exports = {
	/* app */
	ENV: 'dev', /* dev | prod */
	AUTHOR: 'tothj',
	EMAIL: 'tothj@tothj.com',
	VERSION: '1.0.1',
	
	/* window */
	WIN_TITLE: 'Lorem ipsum generator',
	WIN_ICON: './img/icon.ico',
	TRAY_ICON: './img/tray.ico',
	WIN_WIDTH: 800,
	WIN_HEIGHT: 600,
	WIN_MIN_WIDTH: 800,
	WIN_MIN_HEIGHT: 600,
	WIN_RESIZEABLE: true,
	WIN_CENTER: true,
	WIN_FRAME: true,
	WIN_HIDE_MENU: true,
	HTML_FILE_MAIN: 'main',

	/* lorem ipsum data */
	DEFAULT_PARAGRAPH: 5,
	MIN_PARAGRAPH: 1,
	MAX_PARAGRAPH: 100,
	MIN_SENTENCE: 4,
	MAX_SENTENCE: 16,
	MIN_WORD: 4,
	MAX_WORD: 16,
	LI_START_ORIGINAL: false,

	LI_ORIGINAL: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	
	LI_BASE: [
		'lorem', 'ipsum', 'dolor', 'sit', 'amet',
		'consectetur', 'adipiscing', 'elit', 'sed', 'do',
		'eiusmod', 'tempor', 'incididunt', 'ut', 'labore',
		'et', 'dolore', 'magna', 'aliqua', 'enim',
		'ad', 'minim', 'veniam', 'quis', 'nostrud',
		'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip',
		'ex', 'ea', 'commodo', 'consequat', 'duis',
		'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
		'velit', 'esse', 'cillum', 'eu', 'fugiat',
		'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat',
		'cupidatat', 'non', 'proident', 'sunt', 'culpa',
		'qui', 'officia', 'deserunt', 'mollit', 'anim',
		'id', 'est', 'laborum'
	],
};
