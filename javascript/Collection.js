import { DomElements } from "./DomElements.js";
import { HeroUI } from "./HeroUI.js";

export class Collection {
	constructor() {
		this.collection = [];
		this.heroCount = 0;
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
		this.PrintHeroCount();
		const heroesContainer = DomElements.heroesContainer;
		this.collection.forEach(hero => {
			return new HeroUI(hero, heroesContainer);
		});
	}
	PrintHeroCount() {
		DomElements.heroCount.textContent = `Hero Count: ${this.heroCount}`;
	}
}
