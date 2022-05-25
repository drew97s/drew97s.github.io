class ball{
  
  constructor(){
      this.x = width/2;
      this.y = height/2;
      this.xspeed = 0;
      this.yspeed = 0;
      this.r = 10;
      this.reset();
      }    
  
  update(){
      this.x += this.xspeed;
      this.y += this.yspeed;

      }
  
  show(){
      fill(255)
      ellipse(this.x , this.y , this.r*2)
      }
  
  reset(){
      this.x = width/2
      this.y = height/2
      this.xspeed = 5
      this.yspeed = 5
      }
  
  wall(){
      if (this.y-this.r*2 < 0 || this.y+this.r*2 > height){
      this.yspeed *= -1;
      }
  
      if (this.x-this.r < 0 || this.x+this.r > width)
      {this.reset()}
      }
  
  colPlayer(p){}
  
}

  
//   //Collision with Player two
//     if (xDir == true) { let d = dist (p2Coords.x, p2Coords.y, bCoords.x,         bCoords.y)
//         if (d <= 17.5)
//         {xDir=false;
//         bSpeedx=-bSpeedx;} } 
  
//     if (xDir == true) { let d = dist (p2Coords.x, p2Coords.y+20,                 bCoords.x, bCoords.y)
//         if (d <= 17.5)
//         {xDir=false;
//          bSpeedx=-bSpeedx;
//          bSpeedy=-bSpeedy+1;}}
  
//     if (xDir == true) { let d = dist (p2Coords.x, p2Coords.y-20,                 bCoords.x, bCoords.y)
    
//     if (d <= 17.5)
//         {xDir=false;
//         bSpeedx=-bSpeedx;
//         bSpeedy=-bSpeedy-1;} }
  
  
//   //Collision with player One 
  
//     if (xDir == false) { let d = dist (p1Coords.x, p1Coords.y, bCoords.x,         bCoords.y)
//         if (d <= 17.5)
//         {xDir=true;
//         bSpeedx=-bSpeedx;} } 
  
//     if (xDir == false) { let d = dist (p1Coords.x, p1Coords.y+20,                 bCoords.x, bCoords.y)
//         if (d <= 17.5)
//         {xDir=true;
//          bSpeedx=-bSpeedx;
//          bSpeedy=-bSpeedy+2;} }
  
  
//     if (xDir == false) { let d = dist (p1Coords.x, p1Coords.y-20,                 bCoords.x, bCoords.y)
    
//     if (d <= 17.5)
//         {xDir=true;
//         bSpeedx=-bSpeedx;
//         bSpeedy=-bSpeedy-2;} }}

  