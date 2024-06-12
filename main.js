const body = document.querySelector("body");
const content = document.querySelector(".content");
const gradientText = document.querySelector(".gradientText");

const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getgradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomnumber = Math.trunc(Math.random() * colors.length);
    color += colors[randomnumber];
  }
  return color;
}

function setGradient() {
  const random1 = getgradient();
  const random2 = getgradient();
  const randomNum = Math.floor(Math.random() * 360);
  const bgColor = `linear-gradient(${randomNum}deg, ${random1}, ${random2})`;

  body.style.background = bgColor;
  gradientText.textContent = bgColor;
}

content.addEventListener("click", setGradient);
