// начальное положение кубика
let squareX = 151,
    squareY = 16;

let step;

function preload() {
  soundFormats('mp3', 'ogg');
  step = loadSound('sound/walk.mp3');
  block = loadSound('sound/block.mp3');
  win = loadSound('sound/win.mp3');
}

let buttonLeft,
    buttonTop,
    buttonRight,
    buttonBottom;

function setup() {
  let canvas = createCanvas(331, 431);
  canvas.parent('#error-game');
}

let labirinthArray = [];
labirinthArray.push([30, 30, 30, 45]);
labirinthArray.push([30, 45, 30, 60]);
labirinthArray.push([30, 60, 30, 75]);
labirinthArray.push([30, 75, 30, 90]);
labirinthArray.push([30, 90, 30, 105]);
labirinthArray.push([30, 105, 30, 120]);
labirinthArray.push([30, 120, 30, 135]);
labirinthArray.push([30, 135, 45, 135]);
labirinthArray.push([45, 135, 60, 135]);
labirinthArray.push([60, 135, 60, 120]);
labirinthArray.push([60, 120, 60, 105]);
labirinthArray.push([60, 105, 45, 105]);
labirinthArray.push([45, 105, 45, 120]);
labirinthArray.push([30, 135, 30, 150]);
labirinthArray.push([30, 150, 45, 150]);
labirinthArray.push([45, 150, 45, 165]);
labirinthArray.push([45, 165, 45, 180]);
labirinthArray.push([45, 180, 30, 180]);
labirinthArray.push([30, 180, 30, 195]);
labirinthArray.push([15, 165, 30, 165]);
labirinthArray.push([45, 180, 45, 195]);
labirinthArray.push([45, 195, 45, 210]);
labirinthArray.push([45, 210, 30, 210]);
labirinthArray.push([45, 210, 45, 225]);
labirinthArray.push([45, 225, 30, 225]);
labirinthArray.push([30, 225, 30, 240]);
labirinthArray.push([30, 240, 30, 255]);
labirinthArray.push([15, 240, 30, 240]);
labirinthArray.push([30, 240, 45, 240]);
labirinthArray.push([45, 240, 60, 240]);
labirinthArray.push([15, 270, 30, 270]);
labirinthArray.push([60, 270, 45, 270]);
labirinthArray.push([45, 270, 45, 255]);
labirinthArray.push([45, 255, 60, 255]);
labirinthArray.push([60, 255, 75, 255]);
labirinthArray.push([75, 255, 75, 270]);
labirinthArray.push([75, 270, 75, 285]);
labirinthArray.push([75, 285, 60, 285]);
labirinthArray.push([60, 285, 45, 285]);
labirinthArray.push([45, 285, 30, 285]);
labirinthArray.push([30, 285, 30, 300]);
labirinthArray.push([30, 300, 45, 300]);
labirinthArray.push([45, 300, 45, 315]);
labirinthArray.push([60, 285, 60, 300]);
labirinthArray.push([60, 300, 75, 300]);
labirinthArray.push([45, 210, 60, 210]);
labirinthArray.push([60, 210, 75, 210]);
labirinthArray.push([60, 210, 60, 195]);
labirinthArray.push([60, 195, 75, 195]);
labirinthArray.push([75, 195, 90, 195]);
labirinthArray.push([45, 225, 60, 225]);
labirinthArray.push([60, 225, 75, 225]);
labirinthArray.push([75, 225, 75, 240]);
labirinthArray.push([75, 225, 90, 225]);
labirinthArray.push([90, 225, 105, 225]);
labirinthArray.push([105, 225, 120, 225]);
labirinthArray.push([120, 225, 135, 225]);
labirinthArray.push([135, 225, 135, 210]);
labirinthArray.push([135, 210, 135, 195]);
labirinthArray.push([135, 225, 150, 225]);
labirinthArray.push([150, 225, 150, 210]);
labirinthArray.push([150, 210, 165, 210]);
labirinthArray.push([165, 210, 165, 195]);
labirinthArray.push([165, 195, 150, 195]);
labirinthArray.push([135, 225, 135, 240]);
labirinthArray.push([135, 240, 120, 240]);
labirinthArray.push([120, 240, 105, 240]);
labirinthArray.push([105, 240, 105, 255]);
labirinthArray.push([105, 255, 105, 270]);
labirinthArray.push([90, 240, 90, 255]);
labirinthArray.push([90, 255, 90, 270]);
labirinthArray.push([90, 270, 90, 285]);
labirinthArray.push([90, 285, 90, 300]);
labirinthArray.push([90, 300, 105, 300]);
labirinthArray.push([90, 285, 105, 285]);
labirinthArray.push([105, 285, 120, 285]);
labirinthArray.push([120, 285, 120, 270]);
labirinthArray.push([120, 270, 120, 255]);
labirinthArray.push([120, 285, 135, 285]);
labirinthArray.push([135, 285, 135, 300]);
labirinthArray.push([135, 300, 120, 300]);
labirinthArray.push([120, 300, 120, 315]);
labirinthArray.push([90, 180, 75, 180]);
labirinthArray.push([75, 180, 60, 180]);
labirinthArray.push([60, 180, 60, 165]);
labirinthArray.push([60, 165, 60, 150]);
labirinthArray.push([60, 150, 75, 150]);
labirinthArray.push([75, 150, 90, 150]);
labirinthArray.push([90, 150, 90, 165]);
labirinthArray.push([90, 165, 105, 165]);
labirinthArray.push([105, 165, 120, 165]);
labirinthArray.push([120, 165, 135, 165]);
labirinthArray.push([75, 150, 75, 165]);
labirinthArray.push([105, 165, 105, 180]);
labirinthArray.push([105, 180, 105, 195]);
labirinthArray.push([90, 210, 105, 210]);
labirinthArray.push([105, 210, 105, 225]);
labirinthArray.push([105, 210, 120, 210]);
labirinthArray.push([120, 210, 120, 195]);
labirinthArray.push([120, 195, 120, 180]);
labirinthArray.push([120, 180, 135, 180]);
labirinthArray.push([135, 180, 150, 180]);
labirinthArray.push([150, 180, 150, 165]);
labirinthArray.push([150, 165, 150, 150]);
labirinthArray.push([150, 150, 135, 150]);
labirinthArray.push([135, 150, 120, 150]);
labirinthArray.push([120, 150, 120, 135]);
labirinthArray.push([105, 165, 105, 150]);
labirinthArray.push([105, 150, 105, 135]);
labirinthArray.push([105, 135, 90, 135]);
labirinthArray.push([90, 135, 90, 120]);
labirinthArray.push([90, 120, 90, 105]);
labirinthArray.push([90, 105, 90, 90]);
labirinthArray.push([90, 90, 105, 90]);
labirinthArray.push([75, 135, 75, 120]);
labirinthArray.push([75, 120, 75, 105]);
labirinthArray.push([75, 105, 75, 90]);
labirinthArray.push([75, 90, 60, 90]);
labirinthArray.push([60, 90, 45, 90]);
labirinthArray.push([45, 90, 45, 75]);
labirinthArray.push([45, 75, 45, 60]);
labirinthArray.push([45, 60, 45, 45]);
labirinthArray.push([45, 45, 45, 30]);
labirinthArray.push([45, 30, 60, 30]);
labirinthArray.push([60, 30, 75, 30]);
labirinthArray.push([75, 30, 75, 45]);
labirinthArray.push([60, 45, 60, 60]);
labirinthArray.push([60, 60, 60, 75]);
labirinthArray.push([60, 60, 75, 60]);
labirinthArray.push([75, 60, 75, 75]);
labirinthArray.push([75, 75, 75, 90]);
labirinthArray.push([75, 75, 90, 75]);
labirinthArray.push([90, 75, 90, 90]);
labirinthArray.push([90, 75, 105, 75]);
labirinthArray.push([105, 75, 120, 75]);
labirinthArray.push([75, 30, 90, 30]);
labirinthArray.push([90, 30, 105, 30]);
labirinthArray.push([105, 30, 105, 45]);
labirinthArray.push([105, 45, 90, 45]);
labirinthArray.push([90, 45, 90, 60]);
labirinthArray.push([105, 45, 120, 45]);
labirinthArray.push([120, 45, 135, 45]);
labirinthArray.push([105, 60, 120, 60]);
labirinthArray.push([120, 60, 120, 75]);
labirinthArray.push([120, 75, 120, 90]);
labirinthArray.push([120, 90, 120, 105]);
labirinthArray.push([120, 105, 135, 105]);
labirinthArray.push([135, 105, 150, 105]);
labirinthArray.push([150, 105, 150, 90]);
labirinthArray.push([150, 90, 135, 90]);
labirinthArray.push([135, 90, 135, 75]);
labirinthArray.push([105, 105, 105, 120]);
labirinthArray.push([105, 120, 120, 120]);
labirinthArray.push([120, 120, 135, 120]);
labirinthArray.push([135, 120, 150, 120]);
labirinthArray.push([150, 120, 150, 135]);
labirinthArray.push([150, 135, 150, 150]);
labirinthArray.push([135, 120, 135, 135]);
labirinthArray.push([120, 60, 135, 60]);
labirinthArray.push([135, 60, 150, 60]);
labirinthArray.push([150, 60, 150, 75]);
labirinthArray.push([150, 60, 150, 45]);
labirinthArray.push([150, 45, 150, 30]);
labirinthArray.push([150, 30, 135, 30]);
labirinthArray.push([135, 30, 120, 30]);
labirinthArray.push([120, 30, 120, 15]);
labirinthArray.push([120, 15, 105, 15]);
labirinthArray.push([105, 15, 90, 15]);
labirinthArray.push([90, 15, 75, 15]);
labirinthArray.push([75, 15, 60, 15]);
labirinthArray.push([60, 15, 45, 15]);
labirinthArray.push([45, 15, 30, 15]);
labirinthArray.push([30, 15, 15, 15]);
labirinthArray.push([15, 15, 15, 30]);
labirinthArray.push([15, 30, 15, 45]);
labirinthArray.push([15, 45, 15, 60]);
labirinthArray.push([15, 60, 15, 75]);
labirinthArray.push([15, 75, 15, 90]);
labirinthArray.push([15, 90, 15, 105]);
labirinthArray.push([15, 105, 15, 120]);
labirinthArray.push([15, 120, 15, 135]);
labirinthArray.push([15, 135, 15, 150]);
labirinthArray.push([15, 150, 15, 165]);
labirinthArray.push([15, 165, 15, 180]);
labirinthArray.push([15, 180, 15, 195]);
labirinthArray.push([15, 195, 15, 210]);
labirinthArray.push([15, 210, 15, 225]);
labirinthArray.push([15, 225, 15, 240]);
labirinthArray.push([15, 240, 15, 255]);
labirinthArray.push([15, 255, 15, 270]);
labirinthArray.push([15, 270, 15, 285]);
labirinthArray.push([15, 285, 15, 300]);
labirinthArray.push([15, 300, 15, 315]);
labirinthArray.push([15, 315, 30, 315]);
labirinthArray.push([30, 315, 45, 315]);
labirinthArray.push([45, 315, 60, 315]);
labirinthArray.push([60, 315, 75, 315]);
labirinthArray.push([75, 315, 90, 315]);
labirinthArray.push([90, 315, 105, 315]);
labirinthArray.push([105, 315, 120, 315]);
labirinthArray.push([120, 315, 135, 315]);
labirinthArray.push([135, 315, 150, 315]);
labirinthArray.push([150, 315, 165, 315]);
labirinthArray.push([180, 315, 180, 300]);
labirinthArray.push([180, 300, 165, 300]);
labirinthArray.push([165, 300, 150, 300]);
labirinthArray.push([165, 300, 165, 285]);
labirinthArray.push([165, 285, 150, 285]);
labirinthArray.push([150, 285, 150, 270]);
labirinthArray.push([150, 270, 135, 270]);
labirinthArray.push([135, 270, 135, 255]);
labirinthArray.push([135, 255, 150, 255]);
labirinthArray.push([150, 270, 165, 270]);
labirinthArray.push([165, 270, 165, 255]);
labirinthArray.push([165, 270, 180, 270]);
labirinthArray.push([180, 270, 180, 255]);
labirinthArray.push([180, 255, 180, 240]);
labirinthArray.push([180, 240, 165, 240]);
labirinthArray.push([165, 240, 150, 240]);
labirinthArray.push([165, 240, 165, 225]);
labirinthArray.push([165, 225, 180, 225]);
labirinthArray.push([180, 225, 180, 210]);
labirinthArray.push([180, 300, 180, 285]);
labirinthArray.push([180, 315, 195, 315]);
labirinthArray.push([195, 315, 210, 315]);
labirinthArray.push([210, 315, 210, 300]);
labirinthArray.push([210, 300, 210, 285]);
labirinthArray.push([210, 285, 195, 285]);
labirinthArray.push([195, 285, 195, 300]);
labirinthArray.push([210, 315, 225, 315]);
labirinthArray.push([225, 315, 225, 300]);
labirinthArray.push([225, 315, 240, 315]);
labirinthArray.push([240, 315, 240, 300]);
labirinthArray.push([240, 300, 240, 285]);
labirinthArray.push([240, 285, 225, 285]);
labirinthArray.push([240, 315, 255, 315]);
labirinthArray.push([255, 315, 270, 315]);
labirinthArray.push([270, 315, 270, 300]);
labirinthArray.push([270, 300, 270, 285]);
labirinthArray.push([270, 285, 255, 285]);
labirinthArray.push([255, 285, 255, 300]);
labirinthArray.push([255, 285, 255, 270]);
labirinthArray.push([255, 270, 240, 270]);
labirinthArray.push([240, 270, 225, 270]);
labirinthArray.push([225, 270, 210, 270]);
labirinthArray.push([210, 270, 210, 255]);
labirinthArray.push([210, 255, 210, 240]);
labirinthArray.push([180, 270, 195, 270]);
labirinthArray.push([195, 270, 195, 255]);
labirinthArray.push([195, 255, 195, 240]);
labirinthArray.push([195, 240, 195, 225]);
labirinthArray.push([195, 225, 210, 225]);
labirinthArray.push([210, 225, 225, 225]);
labirinthArray.push([225, 210, 225, 225]);
labirinthArray.push([225, 225, 225, 240]);
labirinthArray.push([225, 240, 225, 255]);
labirinthArray.push([225, 240, 240, 240]);
labirinthArray.push([270, 285, 270, 270]);
labirinthArray.push([270, 270, 270, 255]);
labirinthArray.push([270, 270, 285, 270]);
labirinthArray.push([285, 270, 285, 285]);
labirinthArray.push([285, 285, 285, 300]);
labirinthArray.push([285, 300, 300, 300]);
labirinthArray.push([300, 300, 300, 285]);
labirinthArray.push([300, 285, 300, 270]);
labirinthArray.push([270, 315, 285, 315]);
labirinthArray.push([285, 315, 300, 315]);
labirinthArray.push([300, 315, 315, 315]);
labirinthArray.push([315, 315, 315, 300]);
labirinthArray.push([315, 300, 315, 285]);
labirinthArray.push([315, 285, 315, 270]);
labirinthArray.push([315, 270, 315, 255]);
labirinthArray.push([315, 255, 300, 255]);
labirinthArray.push([300, 255, 285, 255]);
labirinthArray.push([285, 255, 285, 240]);
labirinthArray.push([285, 240, 270, 240]);
labirinthArray.push([285, 240, 300, 240]);
labirinthArray.push([300, 240, 300, 225]);
labirinthArray.push([240, 255, 255, 255]);
labirinthArray.push([255, 255, 255, 240]);
labirinthArray.push([255, 240, 255, 225]);
labirinthArray.push([255, 225, 255, 210]);
labirinthArray.push([255, 210, 255, 195]);
labirinthArray.push([270, 225, 255, 225]);
labirinthArray.push([255, 225, 240, 225]);
labirinthArray.push([240, 225, 240, 210]);
labirinthArray.push([240, 210, 240, 195]);
labirinthArray.push([240, 195, 240, 180]);
labirinthArray.push([240, 180, 255, 180]);
labirinthArray.push([255, 180, 270, 180]);
labirinthArray.push([270, 180, 270, 195]);
labirinthArray.push([270, 180, 270, 165]);
labirinthArray.push([270, 165, 270, 150]);
labirinthArray.push([270, 150, 285, 150]);
labirinthArray.push([285, 150, 285, 165]);
labirinthArray.push([285, 165, 285, 180]);
labirinthArray.push([285, 180, 285, 195]);
labirinthArray.push([285, 195, 285, 210]);
labirinthArray.push([285, 210, 285, 225]);
labirinthArray.push([270, 210, 285, 210]);
labirinthArray.push([285, 210, 300, 210]);
labirinthArray.push([300, 210, 300, 195]);
labirinthArray.push([300, 195, 300, 180]);
labirinthArray.push([300, 180, 300, 165]);
labirinthArray.push([300, 165, 300, 150]);
labirinthArray.push([315, 255, 315, 240]);
labirinthArray.push([315, 240, 315, 225]);
labirinthArray.push([315, 225, 315, 210]);
labirinthArray.push([315, 210, 315, 195]);
labirinthArray.push([315, 195, 300, 195]);
labirinthArray.push([210, 210, 210, 195]);
labirinthArray.push([210, 195, 195, 195]);
labirinthArray.push([195, 195, 195, 180]);
labirinthArray.push([195, 180, 195, 165]);
labirinthArray.push([195, 165, 210, 165]);
labirinthArray.push([180, 195, 195, 195]);
labirinthArray.push([195, 210, 195, 195]);
labirinthArray.push([225, 195, 210, 195]);
labirinthArray.push([150, 180, 165, 180]);
labirinthArray.push([165, 180, 180, 180]);
labirinthArray.push([180, 180, 195, 180]);
labirinthArray.push([315, 195, 315, 180]);
labirinthArray.push([315, 180, 315, 165]);
labirinthArray.push([315, 165, 315, 150]);
labirinthArray.push([315, 150, 315, 135]);
labirinthArray.push([315, 135, 300, 135]);
labirinthArray.push([315, 135, 315, 120]);
labirinthArray.push([315, 120, 300, 120]);
labirinthArray.push([300, 120, 285, 120]);
labirinthArray.push([315, 120, 315, 105]);
labirinthArray.push([315, 105, 315, 90]);
labirinthArray.push([315, 90, 300, 90]);
labirinthArray.push([315, 90, 315, 75]);
labirinthArray.push([315, 75, 315, 60]);
labirinthArray.push([315, 60, 300, 60]);
labirinthArray.push([315, 60, 315, 45]);
labirinthArray.push([315, 45, 315, 30]);
labirinthArray.push([315, 30, 300, 30]);
labirinthArray.push([300, 30, 285, 30]);
labirinthArray.push([315, 30, 315, 15]);
labirinthArray.push([315, 15, 300, 15]);
labirinthArray.push([300, 15, 285, 15]);
labirinthArray.push([285, 15, 270, 15]);
labirinthArray.push([270, 15, 270, 30]);
labirinthArray.push([270, 30, 270, 45]);
labirinthArray.push([270, 45, 285, 45]);
labirinthArray.push([285, 45, 300, 45]);
labirinthArray.push([285, 45, 285, 60]);
labirinthArray.push([285, 60, 270, 60]);
labirinthArray.push([270, 60, 255, 60]);
labirinthArray.push([255, 60, 240, 60]);
labirinthArray.push([270, 60, 270, 75]);
labirinthArray.push([270, 75, 285, 75]);
labirinthArray.push([285, 75, 300, 75]);
labirinthArray.push([285, 75, 285, 90]);
labirinthArray.push([285, 90, 285, 105]);
labirinthArray.push([285, 105, 300, 105]);
labirinthArray.push([285, 135, 270, 135]);
labirinthArray.push([270, 135, 270, 120]);
labirinthArray.push([270, 120, 270, 105]);
labirinthArray.push([270, 105, 255, 105]);
labirinthArray.push([255, 105, 255, 120]);
labirinthArray.push([255, 120, 255, 135]);
labirinthArray.push([255, 135, 240, 135]);
labirinthArray.push([240, 135, 225, 135]);
labirinthArray.push([255, 135, 255, 150]);
labirinthArray.push([255, 150, 255, 165]);
labirinthArray.push([255, 165, 240, 165]);
labirinthArray.push([240, 165, 225, 165]);
labirinthArray.push([225, 165, 225, 180]);
labirinthArray.push([225, 180, 210, 180]);
labirinthArray.push([225, 165, 225, 150]);
labirinthArray.push([225, 150, 240, 150]);
labirinthArray.push([180, 165, 165, 165]);
labirinthArray.push([165, 165, 165, 150]);
labirinthArray.push([165, 150, 180, 150]);
labirinthArray.push([180, 150, 195, 150]);
labirinthArray.push([195, 150, 210, 150]);
labirinthArray.push([210, 150, 225, 150]);
labirinthArray.push([165, 150, 165, 135]);
labirinthArray.push([165, 135, 165, 120]);
labirinthArray.push([165, 120, 165, 105]);
labirinthArray.push([165, 105, 165, 90]);
labirinthArray.push([165, 90, 165, 75]);
labirinthArray.push([165, 75, 165, 60]);
labirinthArray.push([165, 60, 165, 45]);
labirinthArray.push([165, 45, 165, 30]);
labirinthArray.push([150, 30, 165, 30]);
labirinthArray.push([165, 30, 180, 30]);
labirinthArray.push([180, 30, 195, 30]);
labirinthArray.push([195, 30, 210, 30]);
labirinthArray.push([165, 45, 180, 45]);
labirinthArray.push([165, 105, 180, 105]);
labirinthArray.push([165, 60, 180, 60]);
labirinthArray.push([180, 60, 180, 75]);
labirinthArray.push([180, 75, 195, 75]);
labirinthArray.push([195, 75, 210, 75]);
labirinthArray.push([210, 75, 225, 75]);
labirinthArray.push([225, 75, 240, 75]);
labirinthArray.push([210, 75, 210, 60]);
labirinthArray.push([210, 60, 210, 45]);
labirinthArray.push([210, 45, 195, 45]);
labirinthArray.push([195, 45, 195, 60]);
labirinthArray.push([120, 15, 135, 15]);
labirinthArray.push([135, 15, 150, 15]);
labirinthArray.push([165, 15, 180, 15]);
labirinthArray.push([180, 15, 195, 15]);
labirinthArray.push([195, 15, 210, 15]);
labirinthArray.push([210, 15, 225, 15]);
labirinthArray.push([225, 15, 240, 15]);
labirinthArray.push([240, 15, 255, 15]);
labirinthArray.push([255, 15, 270, 15]);
labirinthArray.push([225, 15, 225, 30]);
labirinthArray.push([225, 60, 225, 45]);
labirinthArray.push([225, 45, 240, 45]);
labirinthArray.push([240, 45, 240, 30]);
labirinthArray.push([240, 30, 255, 30]);
labirinthArray.push([240, 45, 255, 45]);
labirinthArray.push([255, 45, 270, 45]);
labirinthArray.push([180, 150, 180, 135]);
labirinthArray.push([180, 135, 195, 135]);
labirinthArray.push([195, 135, 210, 135]);
labirinthArray.push([210, 135, 210, 120]);
labirinthArray.push([210, 120, 225, 120]);
labirinthArray.push([225, 120, 240, 120]);
labirinthArray.push([240, 120, 240, 105]);
labirinthArray.push([180, 120, 195, 120]);
labirinthArray.push([195, 120, 210, 120]);
labirinthArray.push([195, 120, 195, 105]);
labirinthArray.push([195, 105, 195, 90]);
labirinthArray.push([180, 90, 195, 90]);
labirinthArray.push([195, 90, 210, 90]);
labirinthArray.push([210, 90, 210, 105]);
labirinthArray.push([210, 105, 225, 105]);
labirinthArray.push([210, 90, 225, 90]);
labirinthArray.push([225, 90, 240, 90]);
labirinthArray.push([240, 90, 255, 90]);
labirinthArray.push([255, 90, 255, 75]);
labirinthArray.push([255, 90, 270, 90]);

// рисуем лабиринт
function drawLabirinth() {
  for(let z = 0; z < labirinthArray.length; z++){
    strokeWeight(2);
    stroke(0);
    line(labirinthArray[z][0], labirinthArray[z][1], labirinthArray[z][2], labirinthArray[z][3]);
  }
}

function draw() {
  // фон
  background(255);

  // игровой кубик
  fill('#f24841');
  strokeWeight(2);
  stroke(255);
  rect(squareX, squareY, 13, 13);

  // создам сеточку, для простоты ориентирования и построения лабиринта
  // нужна для создания лабиринта
  // когда лабиринт готов, надо закоментить или убрать цвет строука
  // for (let x = 1; x < 21; x++) {
  //   for(let y = 1; y < 21; y++){
  //     strokeWeight(2);
  //     stroke("#eee");
  //     noFill();
  //     rect(x * 15, y * 15, 15, 15);
  //   }
  // }

  drawLabirinth();
}

// узнаем ближайшие координаты к курсору муши, чтоб проще проставить путь лабиринта
// это будет нужно на тот случай, чтобы делать лабиринты в будущем
// по умолчанию закомменчу этот блок, чтобы не тыкать понапрасну
// let mouseClickTimes = 0;
// let x1 = '',
//     y1 = '';
//
// let x2 = '',
//     y2 = '';
//
// function mouseClicked(e) {
//   if(mouseClickTimes == 0){
//     x1 = Math.round(mouseX / 15) * 15;
//     y1 = Math.round(mouseY / 15) * 15;
//
//     mouseClickTimes++;
//   }else if(mouseClickTimes == 1){
//     x2 = Math.round(mouseX / 15) * 15;
//     y2 = Math.round(mouseY / 15) * 15;
//
//     console.log('labirinthArray.push([' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ']);');
//
//     labirinthArray.push([x1, y1, x2, y2]);
//     drawLabirinth();
//
//     mouseClickTimes = 0;
//     x1 = '';
//     x1 = '';
//
//     x2 = '';
//     x2 = '';
//   }
// }

// жмакания стрелочками, для управления кубиком
// здесь все выверено до мулиметра
function keyPressed() {
  if (keyCode === UP_ARROW) {
    let hash = {};
    for(let i = 0 ; i < labirinthArray.length; i += 1) {
      hash[labirinthArray[i]] = i;
    }

    if(hash.hasOwnProperty([squareX - 1, squareY - 1, squareX + 14, squareY - 1]) || hash.hasOwnProperty([squareX + 14, squareY - 1, squareX - 1, squareY - 1])) {
      //  впендюрился в стену
      block.play();
    }else {
      // шагнул
      squareY = squareY - 15;
      step.play();
    }
  } else if (keyCode === DOWN_ARROW) {
    let hash = {};
    for(let i = 0 ; i < labirinthArray.length; i += 1) {
      hash[labirinthArray[i]] = i;
    }

    if(hash.hasOwnProperty([squareX - 1, squareY + 14, squareX + 14, squareY + 14]) || hash.hasOwnProperty([squareX + 14, squareY + 14, squareX - 1, squareY + 14])) {
      //  впендюрился в стену
      block.play();
    }else {
      // шагнул
      squareY = squareY + 15;
      step.play();
    }
  } else if (keyCode === LEFT_ARROW) {
    let hash = {};
    for(let i = 0 ; i < labirinthArray.length; i += 1) {
      hash[labirinthArray[i]] = i;
    }

    if(hash.hasOwnProperty([squareX - 1, squareY + 14, squareX - 1, squareY - 1]) || hash.hasOwnProperty([squareX - 1, squareY - 1, squareX - 1, squareY + 14])) {
      //  впендюрился в стену
      block.play();
    }else {
      // шагнул
      squareX = squareX - 15;
      step.play();
    }
  } else if (keyCode === RIGHT_ARROW) {
    let hash = {};
    for(let i = 0 ; i < labirinthArray.length; i += 1) {
      hash[labirinthArray[i]] = i;
    }

    if(hash.hasOwnProperty([squareX + 14, squareY - 1, squareX + 14, squareY + 14]) || hash.hasOwnProperty([squareX + 14, squareY + 14, squareX + 14, squareY - 1])) {
      //  впендюрился в стену
      block.play();
    }else {
      // шагнул
      squareX = squareX + 15;
      step.play();
    }
  }

  // виннер из ю
  if(squareY > 315){
    win.play();
  }
  return false;
}
