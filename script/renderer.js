const cfg = require('../script/config');
const LoremIpsum = require('../script/LoremIpsum');
const li = new LoremIpsum();
const BR = '\r\n\r\n';
const appElem = document.getElementById('app');
const paragraphsElem = document.getElementById('paragraphs');
const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');
const copyBtn = document.getElementById('copy-btn');
const aboutBtn = document.getElementById('about-btn');
const closeAboutBtn = document.getElementById('close-about-btn');
const aboutElem = document.getElementById('about');
const versionElem = document.getElementById('about-version');
const emailElem = document.getElementById('about-email');

document.addEventListener('DOMContentLoaded', (event) => {
	showVersion();
	showEmail();

	generateBtn.addEventListener('click', (event) => {
		resetContentDiv();
		let pars = getParagraphs();
		renderParagraphs(pars);
		copyBtn.disabled = false;
		copyBtn.addEventListener('click', (event) => {
			copyParagraphs(pars);
		});
	});

	resetBtn.addEventListener('click', (event) => {
		resetParagraph();
		resetBtn.disabled = true;
	});

	aboutBtn.addEventListener('click', (event) => {
		aboutElem.style.display = 'block';
	});

	closeAboutBtn.addEventListener('click', (event) => {
		aboutElem.style.display = 'none';
	});

	paragraphsElem.addEventListener('change', (event) => {
		if (paragraphsElem.value == cfg.DEFAULT_PARAGRAPH) {
			resetBtn.disabled = true;
		} else {
			resetBtn.disabled = false;
		}
	});
});

function showVersion() {
	return versionElem.innerHTML = cfg.VERSION;
}

function showEmail() {
	return emailElem.innerHTML = '<a href="mailto:' + cfg.EMAIL + '?subject=lorem-ipsum-generator">' + cfg.EMAIL + '</a>';
}

function copyParagraphs(pars) {
	let out = '';
	for (let i = 0; i < pars.length; i++) {
		out += pars[i] + BR;
	}

	return copyTextToClipboard(out);
}

function resetContentDiv() {
	return appElem.innerHTML = '';
}

function resetParagraph() {
	return paragraphsElem.value = cfg.DEFAULT_PARAGRAPH;
}

function getParagraphs() {
	let paragraphs = paragraphsElem.value;
	if (paragraphs > cfg.MAX_PARAGRAPH) {
		paragraphsElem.value = cfg.MAX_PARAGRAPH;
		paragraphs = cfg.MAX_PARAGRAPH;
	}

	return li.get(paragraphs, true);
}

function renderParagraphs(pars) {
	for (let i = 0; i < pars.length; i++) {
		let node = document.createElement('p');
		node.setAttribute('class', 'par');
		let textnode = document.createTextNode(pars[i]);
		node.appendChild(textnode);
		appElem.appendChild(node);
	}

	return true;
}

function copyTextToClipboard(text){
	var temp = document.createElement('textarea');
	document.body.appendChild(temp);
	temp.setAttribute('id', 'id_temp_text');
	document.getElementById('id_temp_text').value = text;
	temp.select();
	document.execCommand('copy');
	document.body.removeChild(temp);

	return true;
}
