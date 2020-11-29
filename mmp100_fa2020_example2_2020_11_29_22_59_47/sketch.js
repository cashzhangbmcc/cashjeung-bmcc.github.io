//declare and initialize global variables named x, y, d, and pigEyesX
let x = 100;
let y = 200;
let d = 100;
let pigEyesX;
let pigEyesY;

function setup() {
  //create a canvas 400px by 400px
  createCanvas(400, 400);
  
  x = width/2;
  y = height/2;
}

function draw() {
  
  if (mouseIsPressed){
    background(random(255), random(255),random(255));
  }
  else{
    //drawing a grey background
    background(220);
  }
  
  pigEyesX = map(mouseX, 0, width, -5, 5, 1);
  pigEyesY = map(mouseY, 0, height, -5, 5, 1);
  

  //set fill to pink
  fill(255,190,180);
  
  //draw pig ears
  triangle(x-40,y-20, x-45, y-50, x-20,y-40);
  triangle(x+40,y-20, x+45, y-50, x+20,y-40);
  
  //draw pig head
  ellipse(x,y, d, d);

  //draw pig snout
  ellipse(x,y,45,30);
  
  //draw pig nostrils
  fill(0);
  ellipse(x-10, y, 10,10);
  ellipse(x+10, y, 10,10);
  
  //draw pig eyes
  fill(255);
  ellipse(x-20, y-20, 20,20);
  ellipse(x+20, y-20, 20,20);
  
  //draw pig pupils
  fill(0);
  ellipse(x-20 + pigEyesX, y-20 + pigEyesY, 6,6);
  ellipse(x+20 + pigEyesX, y-20 + pigEyesY, 6,6);
  
  if (mouseIsPressed){
    ellipse(x,y+35, 40,15);
  }
}

function mousePressed(){
  if (dist(mouseX, mouseY, x, y) < d/2){
    console.log("oink");
  }
  else{
    //any catch-all code to run
  } 
}