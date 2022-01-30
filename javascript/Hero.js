export class Hero {
	#powerCount = 10;

	constructor(name) {
		this.name = name;
		this.incrementPowerCount = this.incrementPowerCount.bind(this);
		this.getPowerCount = this.getPowerCount.bind(this);
	}
	getPowerCount() {
		return this.#powerCount;
	}

	incrementPowerCount() {
		return this.#powerCount++;
	}
}
