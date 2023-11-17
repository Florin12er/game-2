const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

const levelOne = document.getElementById("level-one");
const levelTwo = document.getElementById("level-two");

let gameSpeed = 1;
let x = 0;
let x2 = 2400;

// first background image

const backgroundLayer1 = new Image();
backgroundLayer1.src =
  "https://github.com/Florin12er/game-2/blob/main/assets/layer-1.png?raw=true";
const backgroundLayer2 = new Image();
backgroundLayer2.src =
  "https://github.com/Florin12er/game-2/blob/main/assets/layer-2.png?raw=true";
const backgroundLayer3 = new Image();
backgroundLayer3.src =
  "https://github.com/Florin12er/game-2/blob/main/assets/layer-3.png?raw=true";
const backgroundLayer4 = new Image();
backgroundLayer4.src =
  "https://raw.githubusercontent.com/Florin12er/game-2/main/assets/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src =
  "https://github.com/Florin12er/game-2/blob/main/assets/layer-5.png?raw=true";

// second background image

const backgroundLayer_1 = new Image();
backgroundLayer_1.src =
  "https://github.com/Florin12er/game-2/blob/main/assets/layer1.png?raw=true";
const backgroundLayer_2 = new Image();
backgroundLayer_2.src =
  "https://github.com/Florin12er/game-2/blob/main/assets/layer2.png?raw=true";
const backgroundLayer_3 = new Image();
backgroundLayer_3.src =
  "https://github.com/Florin12er/game-2/blob/main/assets/layer3.png?raw=true";
const backgroundLayer_4 = new Image();
backgroundLayer_4.src =
  "https://github.com/Florin12er/game-2/blob/main/assets/layer4.png?raw=true";
const backgroundLayer_5 = new Image();
backgroundLayer_5.src =
  "https://github.com/Florin12er/game-2/blob/main/assets/layer5.png?raw=true";

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backgroundLayer1, x, 0);
  ctx.drawImage(backgroundLayer1, x2, 0);
  ctx.drawImage(backgroundLayer2, x, 0);
  ctx.drawImage(backgroundLayer2, x2, 0);
  ctx.drawImage(backgroundLayer3, x, 0);
  ctx.drawImage(backgroundLayer3, x2, 0);
  ctx.drawImage(backgroundLayer4, x, 0);
  ctx.drawImage(backgroundLayer4, x2, 0);
  ctx.drawImage(backgroundLayer5, x, 0);
  ctx.drawImage(backgroundLayer5, x2, 0);
  if (x < -2390) x = 2390 - gameSpeed;
  else x -= gameSpeed;
  if (x2 < -2390) x2 = 2390 - gameSpeed;
  else x2 -= gameSpeed;
  requestAnimationFrame(animate);
}

function animateTwo() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backgroundLayer_1, x, 0);
  ctx.drawImage(backgroundLayer_1, x2, 0);
  ctx.drawImage(backgroundLayer_2, x, 0);
  ctx.drawImage(backgroundLayer_2, x2, 0);
  ctx.drawImage(backgroundLayer_3, x, 0);
  ctx.drawImage(backgroundLayer_3, x2, 0);
  ctx.drawImage(backgroundLayer_4, x, 0);
  ctx.drawImage(backgroundLayer_4, x2, 0);
  ctx.drawImage(backgroundLayer_5, x, 0);
  ctx.drawImage(backgroundLayer_5, x2, 0);
  if (x < -2000) x = 2000 - gameSpeed;
  else x -= gameSpeed;
  if (x2 < -2000) x2 = 2000 - gameSpeed;
  else x2 -= gameSpeed;
  requestAnimationFrame(animateTwo);
}

levelOne.addEventListener("click", () => {
  animate();
});
levelTwo.addEventListener("click", () => {
  animateTwo();
});
