//declare and inittialze a global variable named x ,y ,d and owlEyes
let x = 100;
let y = 200;
let d = 100;
let owlEyesX;
let owlEyesY;

function setup() {
  //create a canvas 400px by 400px
  createCanvas(400, 400);
  
  x = width/2;
  y = height/2;
}

function draw() {
 
  owlEyesX = map(mouseX , 0, width, -5, 5 , 1);
  owlEyesY = map(mouseY , 0, height, -5, 5 , 1);
  
  if (mouseIsPressed){
    background(random(0));
  }
  else{
  //drawing a grey background
  background(220);
  }
  
  //draw owl head
  fill(124,75,0);
  ellipse(x,y, d,d);
  
  
   //draw owl sleep
  line(190,190,170,190);
  line(230,190,210,190);
  
  if(mouseIsPressed){
    
  //draw owl eye
  fill(255, 204, 0);
  ellipse(x+16, y-20,40,40);
  ellipse(x-23, y-15,40,40);
  fill(0);
  ellipse(x+20, y-20,20,20);
  ellipse(x-18, y-15,20,20);
    
    //draw owl pupils
  fill(255);
  ellipse(x+20 + owlEyesX, y-20 +owlEyesY,6,6);
  ellipse(x-18 + owlEyesX, y-15 +owlEyesY,6,6);
  }
  
  //draw owl nose
  fill(255, 204, 0);
  triangle(x-10,y+3 ,x+2,y+13, x+10, y-0);
  
  //draw owl belly
  fill(211,177,125)
  ellipse(x+4, y+42, 40,20);
  
  //draw owl foot
  line(190,260,190,250);
  line(180,260,190,250);
  line(200,260,190,250);
  line(220,260,220,247);
  line(210,260,220,247);
  line(230,260,220,247);

}
function mousePressed(){
  if (dist(mouseX, mouseY, x, y) < d/2){
    console.log("hoo-hoo-hooooo");
  }
  else{
    //any catch-all code to run
  } 
}
