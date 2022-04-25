
const spanRef = document.querySelector("#text");
const inputRef = document.querySelector("#font-size-control");

    
inputRef.addEventListener("input", onRangeInput);


spanRef.style.fontSize = `${inputRef.value}px`;

function onRangeInput(event) {
    spanRef.style.fontSize = `${event.target.value}px`
};
