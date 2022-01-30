import { Hero } from "./javascript/Hero.js";
import { Collection } from "./javascript/Collection.js";
import { heroesContainer, heroCountContainer } from "./javascript/DomElements.js";

const collectionHeroes = new Collection(heroesContainer, heroCountContainer);

const hulk = new Hero("Hulk");
const spider = new Hero("Spider");
const adaxis = new Hero("adaxis123");

collectionHeroes.addHero(hulk);
collectionHeroes.addHero(spider);
collectionHeroes.addHero(adaxis);

collectionHeroes.printHero();
