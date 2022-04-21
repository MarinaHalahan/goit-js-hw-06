{/* <input
      type="text"
      id="validation-input"
      data-length="6"
      placeholder="Please enter 6 symbols"
    /> */}

const inputRef = document.querySelector("#validation-input");


inputRef.addEventListener("blur", () => {
    if (inputRef.value.length != inputRef.dataset.length) {
        inputRef.classList.add("invalid");
    }
});


// inputRef.addEventListener("input", onclickfn);

// function onclickfn(event) {
//     event.
//     // let inputValue = event.currentTarget.value;
//     // return inputValue.length;
// };


// console.log(onclickfn());

// inputRef.addEventListener("blur", (event) => {
//     if (inputValue.length == inputRef.dataset.length) {
//         inputRef.classList.add("valid")
//     } else (inputRef.classList.add("invalid"))
// });
