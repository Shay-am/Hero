import { HeroUI } from "./HeroUI.js";

export class Collection {
	constructor(container, countContainer) {
		this.collection = [];
		this.heroCount = 0;
		this.heroesContainer = container;
		this.heroCountContainer = countContainer;
	}
	setHeroCount = () => this.heroCount++;

	addHero(hero) {
		this.setHeroCount();
		return this.collection.push(hero);
	}
	getHero(name) {
		return this.collection.find(hero => hero.name === name);
	}
	printHero() {
		this.printHeroCount();
		this.collection.forEach(hero => {
			return new HeroUI(hero, this.heroesContainer);
		});
	}
	printHeroCount() {
		this.heroCountContainer.textContent = `Hero Count: ${this.heroCount}`;
	}
}
