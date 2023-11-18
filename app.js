const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 800);
let CANVAS_HEIGHT = (canvas.height = 700);

let gameSpeed = 1;
const levelOne = document.getElementById("level-one");
const levelTwo = document.getElementById("level-two");

const slider = document.getElementById("slider");
slider.value = gameSpeed;
const showGameSpeed = document.getElementById("showGameSpeed");
showGameSpeed.innerHTML = gameSpeed;

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

class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }
  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) this.x = 0;
    this.x = Math.floor(this.x - this.speed);
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height,
    );
  }
}
const Layer1 = new Layer(backgroundLayer1, 0.2);
const Layer2 = new Layer(backgroundLayer2, 0.4);
const Layer3 = new Layer(backgroundLayer3, 0.6);
const Layer4 = new Layer(backgroundLayer4, 0.8);
const Layer5 = new Layer(backgroundLayer5, 1);

const LayerObject = [Layer1, Layer2, Layer3, Layer4, Layer5];

const Layer_1 = new Layer(backgroundLayer_1, 0.2);
const Layer_2 = new Layer(backgroundLayer_2, 0.4);
const Layer_3 = new Layer(backgroundLayer_3, 0.6);
const Layer_4 = new Layer(backgroundLayer_4, 0.8);
const Layer_5 = new Layer(backgroundLayer_5, 1);

const layerArray = [Layer_1, Layer_2, Layer_3, Layer_4, Layer_5];

function animate() {
  CANVAS_HEIGHT = canvas.height = 700;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  LayerObject.forEach((object) => {
    object.update();
    object.draw();
  });
  requestAnimationFrame(animate);
}

function animateTwo() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  layerArray.forEach((object) => {
    object.update();
    object.draw();
  });
  requestAnimationFrame(animateTwo);
}

slider.addEventListener("change", (e) => {
  gameSpeed = e.target.value;
  showGameSpeed.innerHTML = e.target.value;
});

levelOne.addEventListener("click", () => {
  animate();
});
levelTwo.addEventListener("click", () => {
  animateTwo();
});
