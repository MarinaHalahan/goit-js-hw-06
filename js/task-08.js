
const formRef = document.querySelector(".login-form");
const inputRefs = document.querySelectorAll("input");

inputRefs.forEach(input => input.required = true);

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const { email, password } = event.currentTarget.elements;
    const formData = {
        email: email.value,
        password: password.value,
    };

    console.log(formData);
    event.currentTarget.reset();
};




