let up = true;
let down = true;
let w = true;
let s = true;
let p1Speed = 7;
let p2Speed = 5;
let p1Coords;
let p2Coords;
let pDims;
let bCoords;
let xDir = true
let yDir = true
let wallCol = true
var serial;
var portName = "COM3";
var inMessage = [0,0,0];
let dataRec = false;
let joyX;
let joyY;

function preload() {
  soundFormats('wav');
  mySound = loadSound('ding');
}

function setup() {
  createCanvas(400, 400);
    serial = new p5.SerialPort();
  serial.open(portName);
  serial.on('data', gotData);
  p1Coords = createVector(0,0);
  p2Coords = createVector(0,0);
  bCoords = createVector(0,0);
  p1Coords.x = width/16;
  p1Coords.y = height/2;
  p2Coords.x = 15*width/16
  p2Coords.y = height/2
  pDims = createVector(15,70)
  bDims = createVector(10,10)
  bSpeedx = 5
  bSpeedy = 0.5
  bCoords = createVector(width/2,height/2);
  // ball = new ball();

}

function gotData() {
  dataRec = true;
  var currentString = serial.readLine();
  trim(currentString); 
  if (!currentString) return;
  // console.log(currentString);
  inMessage = split(currentString, '&');   // save the currentString to use for the text
  // let button;
}


function draw() {
  joyX = map(inMessage[0], 0, 1023, 0, width);
  joyY = map(inMessage[1], 0, 1023, 0, height);
  frameRate(60)
  background(0);

  
  // ball.show();
  // ball.update();
  // ball.wall();
  
//player1
  rectMode(CENTER)
  rect(p1Coords.x,joyY,pDims.x, pDims.y)
  
  // if (keyIsDown(87) & w == true) {joyY += -p1Speed}
  // if (keyIsDown(83) & s == true) {joyY += p1Speed}
  
  if(joyY < pDims.y/2){w=false;}
  else{w=true;}
  
  if(joyY >  height -pDims.y/2){s=false;}
  else {s=true}
  
//player 2
  rectMode(CENTER)
  rect(p2Coords.x,p2Coords.y,pDims.x, pDims.y)
  
  if (keyIsDown(UP_ARROW) & up == true) {p2Coords.y += -p2Speed}
  if (keyIsDown(DOWN_ARROW) & down == true) {p2Coords.y += p2Speed}
  
  if(p2Coords.y  < pDims.y/2){up=false;}
  else{up=true;}
  
  if(p2Coords.y > height - pDims.y/2 ){down=false;}
  else {down=true}
  
//Ball
  bCoords.x+=bSpeedx;
  bCoords.y+=bSpeedy;
  ellipse(bCoords.x,bCoords.y,bDims.x)
  
  //collision with walls
  
  if(bCoords.y > height-bDims.y/2 && wallCol){
    // wallCol=false;
    bSpeedy=-bSpeedy;
    }
  
  if(bCoords.y > height-bDims.y/2 && !yDir){
    yDir=false;
    bSpeedy=-bSpeedy;
    }
  
  if(bCoords.y < bDims.y/2 && wallCol){
    // wallCol=true;
    bSpeedy=-bSpeedy;
    } 
  
  //Collision with Player two
    if (xDir == true) { let d = dist (p2Coords.x, p2Coords.y, bCoords.x, bCoords.y)
        if (d <= 17.5)
        {xDir=false;
        bSpeedx=-bSpeedx;
        mySound.play();} } 
  
    if (xDir == true) { let d = dist (p2Coords.x, p2Coords.y+20,                 bCoords.x, bCoords.y)
        if (d <= 17.5)
        {xDir=false;
         bSpeedx=-bSpeedx;
         bSpeedy=-bSpeedy+1;
        mySound.play();}}
  
    if (xDir == true) { let d = dist (p2Coords.x, p2Coords.y-20,                 bCoords.x, bCoords.y)  
    
    if (d <= 17.5){
        xDir=false;
        bSpeedx=-bSpeedx;
        bSpeedy=-bSpeedy-1;
      mySound.play();
        }}
  
  
  //Collision with player One 
  
    if (xDir == false) { let d = dist (p1Coords.x, joyY, bCoords.x,         bCoords.y)
        if (d <= 17.5)
        {xDir=true;
        bSpeedx=-bSpeedx;
        mySound.play();} } 
  
    if (xDir == false) { let d = dist (p1Coords.x, joyY+20,                 bCoords.x, bCoords.y)
        if (d <= 17.5)
        {xDir=true;
         bSpeedx=-bSpeedx;
         bSpeedy=-bSpeedy+2;
        mySound.play();} }
  
  
    if (xDir == false) { let d = dist (p1Coords.x, joyY-20,                 bCoords.x, bCoords.y)
    
    if (d <= 17.5){
        xDir=true;
        bSpeedx=-bSpeedx;
        bSpeedy=-bSpeedy-2;
    mySound.play();} 
                       
                      }
}
  
  function mousePressed(){
    if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
   let bCoords = (width/2,height/2);}
  }
  

                       
  
  
  
  
  
     

 
                          
  

     