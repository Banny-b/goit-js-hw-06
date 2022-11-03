const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const element = document.querySelector(`#ingredients`);
for (const obj of ingredients) {
  const newTag = document.createElement(`li`);
  newTag.textContent = obj;
  newTag.classList.add(`item`);
  element.append(newTag);
};