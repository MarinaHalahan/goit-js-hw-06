
const spanRef = document.querySelector("#text");
const inputRef = document.querySelector("#font-size-control");

    
inputRef.addEventListener("input", rangeValue);

function rangeValue(event) {
    spanRef.style.fontSize = `${event.target.value}px`
};
