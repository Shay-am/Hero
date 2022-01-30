export class Hero {
	#powerCount = 10;

	constructor(name) {
		this.name = name;
		this.incrementpowerCount = this.incrementpowerCount.bind(this);
		this.getPowerCount = this.getPowerCount.bind(this);
	}
	getPowerCount() {
		return this.#powerCount;
	}

	incrementpowerCount() {
		return this.#powerCount++;
	}
}
