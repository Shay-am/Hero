export class HeroUI {
	constructor(hero, containerToAppend) {
		this.hero = hero;
		this.containerToAppend = containerToAppend;
		this.createContainer();
	}
	createContainer() {
		const createDiv = this.createDiv();
		const createBtn = this.createBtn();

		const { name, incrementPowerCount, getPowerCount } = this.hero;

		createBtn.addEventListener("click", () => {
			incrementPowerCount();
			createDiv.innerHTML = this.textContentInDiv(name, getPowerCount);
		});

		return this.containerToAppend.append(createDiv, createBtn);
	}

	createBtn() {
		const heroBtn = document.createElement("button");
		heroBtn.textContent = "Power Up Hero";
		return heroBtn;
	}
	createDiv() {
		const { name, getPowerCount } = this.hero;

		const createDiv = document.createElement("div");
		createDiv.innerHTML = this.textContentInDiv(name, getPowerCount);
		return createDiv;
	}

	textContentInDiv(name, getPowerCount) {
		return `<p>Hero name: ${name}</p><p>${name} power count: ${getPowerCount()}</p>`;
	}
}
