const inputValue = document.querySelector('#validation-input');
//  console.log(inputValue.getAttribute('data-length'));
inputValue.addEventListener('blur', event => {
	if (event.target.value.length == inputValue.getAttribute('data-length')) {
		inputValue.classList.add('valid')
		if (inputValue.classList.contains('invalid')) {
			inputValue.classList.remove('invalid')
		};
	} else {
		if (inputValue.classList.contains('valid')) {
			inputValue.classList.remove('valid')
		}
		inputValue.classList.add('invalid')
	};
});