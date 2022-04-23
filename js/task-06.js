
const inputRef = document.querySelector("#validation-input");


inputRef.addEventListener("blur", onInputChangeColorBlur);

function onInputChangeColorBlur() {
    if (inputRef.value.length == inputRef.dataset.length) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    } else {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
    }
};


