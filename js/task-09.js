function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorRef = document.querySelector(".change-color");
const spanTextRef = document.querySelector(".color");
const body = document.body;



btnChangeColorRef.addEventListener("click", handleChangeBtnClick);

function handleChangeBtnClick() {
  let color = getRandomHexColor();
  
  body.style.backgroundColor = `${color}`;
  spanTextRef.textContent = `${color}`;
  getRandomHexColor();
};


