const inputNumber = document.querySelector('#controls>input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const createBoxes = amount => {
	const elementsToAdd = [];
	for (let i = 0; i < amount; i += 1) {
		const div = document.createElement('div');
		div.style.height = `${30 + 10 * i}px`;
		div.style.width = `${30 + 10 * i}px`;
		div.style.background = getRandomHexColor();
		elementsToAdd.push(div);
	};
	return elementsToAdd;
};

const destroyBoxes = () => {
	boxes.innerHTML = '';
};

buttonCreate.addEventListener('click', () => {
	const boxesToAdd = createBoxes(inputNumber.value);
	boxes.append(...boxesToAdd);
});

buttonDestroy.addEventListener('click', () => {
	destroyBoxes.call();
});