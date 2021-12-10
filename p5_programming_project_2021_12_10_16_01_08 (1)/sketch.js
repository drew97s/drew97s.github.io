//-VARIABLES-\\
var playerCheck = 17.5;
var obsCheck = 17.5;
var speed = 2.5;
var up = true;
var down = true;
var left = true;
var right = true;
// While also creating the keybindings for W,A,S,D I also needed to create global variables//
var w = true;
var s = true;
var a = true;
var d = true;
var lvl1 = true;
var lvl2 = false;
var lvl3 = false;

//-PLAYER-\\
var player = {
    x: 50,
    y: 300,
  show: function() {
    fill(255,0,0)
    stroke(0,0,0)
    strokeWeight(2)
    shape = rect(player.x,player.y,25,25);
  },
  
  borderCheck: function(x,y) {
      if (player.x <= 0 + x + playerCheck) { left = false }
      else {left = true}
  
      if (player.x >= width - x - playerCheck){ right=false }
      else {right=true}
    
      if (player.y <= 0 + y + playerCheck) {up = false}
      else {up = true}
    
      if (player.y >= height - y - playerCheck) {down = false}
      else {down = true}
    // Same thing with the key binding I wanted to create movement with W,A,S,D and I relized i needed these functions to keep the player in the bounderies. Without thesse code you can literally go out of bounds and cheat//
      if (player.x <= 0 + x + playerCheck) { a = false }
      else {a=true}
  
      if (player.x >= width - x - playerCheck){ d=false }
      else {d=true}
    
      if (player.y <= 0 + y + playerCheck) {w = false}
      else {w=true}
    
      if (player.y >= height - y - playerCheck) {s = false}
      else (s=true)
  },
}

//-OBSTACLE-\\
//no semicolons inside of javascript object notation\\
var obs = {
    //assingning atributes for objects":"//
      x: 100,
      y: 100,
    // creating an array "[]" (arrays will always start from 0)//
    // I edited the speeds on some of the obstacles to make the levels          harder//
      spdY: [12, -6, 12, -6, 12, -6, 12, -6],
      spdX: [6, -6, 6, -12, 6, -6, 6, -6],
    // starting positions for obstacles on level 1//
      xcords: [150, 200, 250, 300, 350, 400, 450],
      ycords: [300, 300, 300, 300, 300, 300, 300],
    // starting positions for obstacles on level 2//
      xcords2: [300, 300, 300, 300, 300, 300, 300],
      ycords2: [150, 200, 250, 300, 350, 400, 450],
    // starting positions for obstacles on level 3//
      xcords3: [150, 450, 250, 350, 350, 250, 450, 150],
      ycords3: [450, 150, 350, 250, 250, 350, 150, 450],
  
      show: function() {
      //ellipseMode(CENTER) dictates to where the circle will be rawn from in. In this case           it will start from the center of the circle//
        ellipseMode(CENTER);
        fill(0,0,255);
        stroke(0,0,0);
        if (lvl1 == true) 
           {for (let i = 0 ; i<7; i += 1)
           {ellipse (obs.xcords[i], obs.ycords[i], 25, 25); obs.ycords[i] += obs.spdY[i];} }
        if (lvl2 == true) 
           {for (let i = 0 ; i<7; i += 1)
           {ellipse (obs.xcords2[i], obs.ycords2[i], 25, 25); obs.xcords2[i] +=                           obs.spdX[i];} }
        
        if (lvl3 == true) 
           {for (let i = 0 ; i<8; i += 1)
           {ellipse (obs.xcords3[i], obs.ycords3[i], 25, 25); 
            if (i %2 == 0) {obs.xcords3[i] += obs.spdX[i];}
            else {obs.ycords3[i] += obs.spdY[i];} } } },
  
        borderCheck: function(x,y) {
        for (let i = 0; i < 8; i ++) 
        {if (lvl1 == true) {if (obs.xcords[i] <= x + obsCheck || obs.xcords[i] >= width - x -          obsCheck || obs.ycords[i] <= y + obsCheck || obs.ycords[i] >= height - y -                  obsCheck){obs.spdY[i] = -obs.spdY[i]} }
         
        if (lvl2 == true) {if (obs.xcords2[i] <= x + obsCheck || obs.xcords2[i] >= width - x -          obsCheck || obs.ycords2[i] <= y + obsCheck || obs.ycords2[i] >= height - y -                obsCheck){obs.spdX[i] = -obs.spdX[i]} }
         
        if (lvl3 == true) {if (obs.xcords3[i] <= x + obsCheck || obs.xcords3[i] >= width - x -            obsCheck || obs.ycords3[i] <= y + obsCheck || obs.ycords3[i] >= height - y -                obsCheck) if (i %2 == 0) {obs.spdX[i] = -obs.spdX[i]}
                       else {obs.spdY[i] = -obs.spdY[i]}   } } } }

//-MAIN FUNCTIONS-\\
function setup() {
         createCanvas(600, 600);
         rectMode(CENTER)
         noStroke() }
// I added what we worked on in class to make it full screen. I can't do a bigger canvas though since most the code is based around the convas height and width being 600 pixels//
function mousePressed() {
         let fs = fullscreen();
         fullscreen(!fs)}

function draw() {
    //-LVLS-\\
         if (lvl1 == true){
            background(255,255,255);
            zonesLVL1();
            player.show();
            player.borderCheck(0, 100);
            obs.show();
            obs.borderCheck(0, 100);
            collisionCheck();
            lvlCheck(500, 0); }
        if (lvl2 == true){
            background(255,255,255);
            zonesLVL2();
            player.show();
            player.borderCheck(100, 0);
            obs.show();
            obs.borderCheck(100, 0);
            collisionCheck();
            lvlCheck(0, 100) }
        if (lvl3 == true){
            background(255,255,255);
            zonesLVL3();
            player.show();
            player.borderCheck(0, 100);
            obs.show();
            obs.borderCheck(100, 100);
            collisionCheck();}
  
    //-KEYBINDINGS-\\
        if (keyIsDown(UP_ARROW) & up == true) {player.y += -speed}
        if (keyIsDown(DOWN_ARROW) & down == true) {player.y += speed}
        if (keyIsDown(LEFT_ARROW) & left == true) {player.x += -speed}
        if (keyIsDown(RIGHT_ARROW) & right == true) {player.x += speed}
    //I addded these keybindings on my own by using the code above as a guide. I looked up each key code for the proper binding and took it from there// 
        if (keyIsDown(87) & w == true) {player.y += -speed}
        if (keyIsDown(83) & s == true) {player.y += speed}
        if (keyIsDown(65) & a == true) {player.x += - speed}
        if (keyIsDown(68) & d == true) {player.x += speed}}

// for each level I added a blue backgorund to the playing field just for an aesthetic purposes//
    //-LVL1-\\
function zonesLVL1() {
         fill(144,238,144);
         noStroke()
         rect(0, 300, 200, 400);
         rect(600, 300, 200, 400);
         stroke(0,0,0);
         strokeWeight();
         fill(173,216,230);
         rect(300, 300, 400, 400);
         strokeWeight(5);
         noFill();
         rect(300, 300, 600, 400)}
    //-LVL2-\\
function zonesLVL2() {
         fill(144,238,144);
         noStroke();
         rect(300, 0, 400, 200);
         rect(300, 600, 400,  200);
         stroke(0,0,0);
         strokeWeight();
         fill(173,216,230);
         rect(300, 300, 400, 400);
         stroke(0,0,0);
         strokeWeight(5);
         noFill();
         rect(300, 300, 400, 600)}
    //-LVL3-\\
function zonesLVL3() {
         fill(144,238,144);
         noStroke();
         rect(0, 300, 200, 400);
         rect(600, 300, 200, 400);
         stroke(0,0,0);
         strokeWeight();
         fill(173,216,230);
         rect(300, 300, 400, 400);
         stroke(0,0,0);
         strokeWeight(5);
         noFill();
         rect(300, 300, 600, 400);
         }

function lvlCheck(x, y) {
        if (x > 0) {
            if(player.x >= x) {lvl1 = false; 
                               lvl2 = true; 
                               player.x = 300 
                               player.y = 550} }
        if (y > 0) {
            if (player.y <= y) {lvl2 = false; 
                               lvl3 = true; 
                               player.x = 50 
                               player.y = 300} } } 
function collisionCheck() {
        if (lvl1 == true) 
           { for (let i = 0; i < 8; i++)
           { let d = dist (player.x, player.y, obs.xcords[i], obs.ycords[i])
            if (d <= 30)
           {player.x = 50
            player.y = 300} } } 
  
        if (lvl2 == true) 
           { for (let i = 0; i < 8; i++)
           { let d = dist(player.x, player.y, obs.xcords2[i], obs.ycords2[i])
            if (d <= 30)
           {player.x = 300
            player.y = 550} } }
  
        if (lvl3 == true) 
           { for (let i = 0; i < 8; i++)
           {let d = dist(player.x, player.y, obs.xcords3[i], obs.ycords3[i])
            if (d <= 30)
           {player.x = 50
            player.y = 300} } } }