let inCreatureCreatorMode = true;
let creatureObject = {};
let floorTilesImage;
let dangerFloor;

let lazerBurnGroundImage;
let mutedImage;
let unmutedImage;
let topImage;
//colors
var outlineColor;
var fillColor;
let selectedBodyFillColor;
let selectedStrokeColor;
let staticBodyFillColor;
let deleteColor;
let deadColor;

let deathUponTouchingFloorColor;
let setDeathUponTouchingFloorColor;

let selectedShape1FillColor;
let selectedStaticBodyFillColor;

//sounds
let screamSounds = [];
let lazerShot;
let burnedPlayer;
let lazerSoundEffect;

//fonts
let mainFont;
let smallFont;

function preload() {
    //load fonts
    mainFont = loadFont("Fonts/RobotoMono-Bold.ttf");
    smallFont = loadFont("Fonts/RobotoMono-Regular.ttf");

    //load images
    floorTilesImage = loadImage("pics/floorTiles.png");
    dangerFloor = loadImage("pics/dangerFloor.png");
    lazerBurnGroundImage = loadImage("pics/lazerBurnGround3.png");
    mutedImage = loadImage("pics/mutedYellow.png");
    unmutedImage = loadImage("pics/unmutedYellow.png");
    topImage = loadImage("pics/topImage.png");


    //load sounds
    for (let i = 0; i < 10; i++) {
        screamSounds.push(loadSound('AI learns to walk/sounds/screamingSoundWithPause.mp3'));
        screamSounds[i].setVolume(0.2);
        screamSounds[i].setLoop(true);
        screamSounds[i].playMode('restart');


    }

    lazerShot = loadSound('AI learns to walk/sounds/lazerShot.mp3');
    burnedPlayer = loadSound('AI learns to walk/sounds/burnedByLazer.mp3');


    lazerSoundEffect = loadSound('AI learns to walk/sounds/LazerSoundEffect.mp3');
    lazerSoundEffect.playMode('restart');
    lazerSoundEffect.setLoop(true);


    lazerShot.setVolume(0.2);
    burnedPlayer.setVolume(0.2);
    lazerSoundEffect.setVolume(0.3);

    resetAudio();

}

//called on startup
function setup() {
    //set the font
    textFont(mainFont);

    //set the colors
    setColors();

    //setup creature creature program
    creatureCreatorSetup();
}

//called every frame
function draw() {
    inCreatureCreatorMode ? creatureCreatorDraw() : AILearnsToWalkDraw();
}

//called whenever a key is pressed
function keyPressed() {
    inCreatureCreatorMode ? creatureCreatorKeyPressed() : AILearnsToWalkKeyPressed();
}

//called whenever a key is released
function keyReleased() {
    inCreatureCreatorMode ? creatureCreatorKeyReleased() : AILearnsToWalkKeyReleased();
}

//called whenever the user clicks on the screen
function mousePressed() {
    inCreatureCreatorMode ? creatureCreatorMousePressed() : AILearnsToWalkMousePressed();
}

//sets all the colors
function setColors() {
    outlineColor = color(0, 0, 0);
    staticBodyFillColor = color(200, 200, 200, 150);
    selectedBodyFillColor = color(255, 255, 200, 150);
    selectedStaticBodyFillColor = color(255, 255, 153, 200);
    deleteColor = color(255, 150, 150, 150);
    selectedStrokeColor = color(0);
    selectedShape1FillColor = color(240, 255, 220, 150);
    deadColor = color(255, 0, 0, 10);
    fillColor = color(255);
    deathUponTouchingFloorColor = color(255, 150, 150, 230);
    setDeathUponTouchingFloorColor = color(255, 150, 150, 150);
}



//prevents the window from moving from the arrow keys or the spacebar
window.addEventListener("keydown", function (e) {
    // space and arrow keys and tab
    if ([32, 37, 38, 39, 40, 9].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

