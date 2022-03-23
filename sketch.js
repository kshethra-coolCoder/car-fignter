var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

//Car Fighter
var car, ufo, enemyCar;
var CarBullet, ufoBullet, enemyBullet;
var startTour, astronut, spaceImg;
var gameOver, oops, power;

function preload() {
 // Car Fighter
  car = loadImage("./assets/car1.png");
  ufo = loadImage("./assets/ufo0.png");
  enemyCar = loadImage("./assets/enemy2.png");
  CarBullet = loadImage("./assets/bullet.png");
  ufoBullet = loadImage("./assets/ufoBullet.png");
  enemyBullet = loadImage("./assets/enemyBullet.png");
  backgroundImage = loadImage("./assets/sky_road.png");
  power = loadImage("./assets/power.png");

  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
