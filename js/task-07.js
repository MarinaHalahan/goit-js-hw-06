
const spanRef = document.querySelector("#text");
const inputRef = document.querySelector("#font-size-control");

    
inputRef.addEventListener("input", onRangeInput);

function onRangeInput(event) {
    spanRef.style.fontSize = `${event.target.value}px`
};
