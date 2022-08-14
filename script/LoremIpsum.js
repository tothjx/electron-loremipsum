const cfg = require('./config');

/**
 * lorem ipsum generator
 */
module.exports = class LoremIpsum {
	constructor() {
		this.original = cfg.LI_ORIGINAL
		this.base = cfg.LI_BASE;
		this.start_original = cfg.LI_START_ORIGINAL;
		this.default_paragraph = cfg.DEFAULT_PARAGRAPH;
		this.min_paragraph = cfg.MIN_PARAGRAPH;
		this.max_paragraph =cfg.MAX_PARAGRAPH;
		this.min_sentence = cfg.MIN_SENTENCE;
		this.max_sentence = cfg.MAX_SENTENCE;
		this.min_word = cfg.MIN_WORD;
		this.max_word = cfg.MAX_WORD;
		this.out;
		this.num_paragraph;
		this.num_sentence;
		this.num_word;
	}

	/**
	 * @param {num} par - number of paragraph
	 * @param {boolean} start - start with original li paragraph
	 */
	get(par, start) {
		if (par === null || par === undefined) {
			par = this.default_paragraph;
		}

		if (start !== null && start !== undefined && start === true) {
			this.start_original = true;
		}

		this.out = [];
		this.setNumParagraph(par);
		this.generate();

		return this.out;
	}

	generate() {
		let item;

		for (let i = 1; i <= this.num_paragraph; i++) {
			if (i === 1 && this.start_original === true) {
				item = this.original;
			} else {
				item = this.getParagraph();
			}
			
			this.out.push(item);
		}

		return true;
	}

	capitalize(str) {
		return str[0].toUpperCase() + str.slice(1);
	}

	getParagraph() {
		let paragraph = '';
		this.num_sentence = this.getRndNum(this.min_sentence, this.max_sentence);

		for (let i = 1; i <= this.num_sentence; i++) {
			paragraph += this.getSentence() + ' ';
		}

		return paragraph;
	}

	getSentence() {
		let sentence = '';
		this.num_word = this.getRndNum(this.min_word, this.max_word);
		
		for (let i = 1; i <= this.num_word; i++) {
			sentence += this.getWord();
		}

		return this.capitalize(sentence.trim() + '.');
	}

	getWord() {
		let num = this.getRndNum(1, (this.base.length - 1));

		return this.base[num] + ' ';
	}

	setNumParagraph(num) {
		if (num < this.min_paragraph || num > this.max_paragraph) {
			this.num_paragraph = this.default_paragraph;
		} else {
			this.num_paragraph = num;
		}

		return true;
	}

	getRndNum(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		
		return Math.floor(Math.random() * (max - min)) + min;
	}

	// end
}
