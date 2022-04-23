function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef= document.querySelector('[type="number"]');
const createBtnRef = document.querySelector('[data-create]');
const targetBoxRef = document.querySelector('#boxes');
const destroyBtnRef = document.querySelector('[data-destroy]');

let valueFromInput;

function onInput(event) {
  valueFromInput = event.currentTarget.value;
};
 
 
function createElements(quantity) {
  const array = [];
  let boxsize = 30; 

  for (let i = 0; i <= quantity - 1; i++){
    
    const createDiv = document.createElement('div');
        createDiv.style.width =`${boxsize}px`;
        createDiv.style.height =`${boxsize}px`;
        createDiv.style.backgroundColor = getRandomHexColor();
    
    array.push(createDiv);
    boxsize += 10;

  };
  targetBoxRef.append(...array);
}

function onDestroyBtnClick() {
  targetBoxRef.innerHTML = "";
  inputRef.value = "";
};

inputRef.addEventListener("input", onInput);
createBtnRef.addEventListener('click', () => createElements(valueFromInput));
destroyBtnRef.addEventListener('click', onDestroyBtnClick);