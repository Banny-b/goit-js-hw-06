const textInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

textInput.oninput = function () {
    if (textInput.value === '') {
        nameOutput.innerHTML = 'Anonymous';
    } else{
    nameOutput.innerHTML = textInput.value;
    };
};