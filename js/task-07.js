const inputChange = document.querySelector('input#font-size-control');
const abracadabra = document.querySelector('span#text');

inputChange.addEventListener('input', elem => {
    abracadabra.style.fontSize = `${elem.target.value }px`
});