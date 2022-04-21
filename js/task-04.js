
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

let counterValue = 0;

const onDecrementBtnClick = () => {
    counterValue -= 1;
    return counterValueRef.textContent =counterValue;
};

const onIncrementBtnClick = () => {
    counterValue += 1;
    return counterValueRef.textContent = counterValue;
};

btnDecrementRef.addEventListener("click", onDecrementBtnClick);
btnIncrementRef.addEventListener("click", onIncrementBtnClick);

