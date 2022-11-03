const catElement = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${catElement.length}`);
console.log(``);
catElement.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const listElement = item.lastElementChild;
    console.log(`Elements: ${listElement.children.length}`);
    console.log(``);
});