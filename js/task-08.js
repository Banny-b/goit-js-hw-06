const forms = document.querySelector(".login-form");

const submitControl = (event) => {
    event.preventDefault();
const {
    elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert(`Заполните пожалуйста все поля, Email и Password`);
};

const registrationData = {
    email: forms.elements.email.value,
    password: forms.elements.password.value,
};
    console.log(registrationData);
    
    event.currentTarget.reset();
};
forms.addEventListener("submit", submitControl);