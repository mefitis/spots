
let ballX;
let ballY;
let ballXV;
let ballYV;
let rand;

// only runs once at start
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 51);
  ballX = windowWidth / 2;
  ballY = windowHeight / 2;
  rand = random(25, 100);
  //cam = createCamera();
}

/**
function keyPressed() {
 if(key === 'w') {
   cam.move(0, -50, 0);
 }
 else if(key === 'a') {
   cam.move(-50, 0, 0);
 }
 else if(key === 's') {
   cam.move(0, 50, 0);
 }
 else if(key === 'd') {
   cam.move(50, 0, 0);
 }
}
**/

function mousePressed() {

}

// Values for bigRand that produce nice outputs:
// 189.14902306467405

let newRand;
let rand1;
let rand2;
let rand3;
let count = 0;
// runs in a loop
function draw() {
  //background(0, 0, 51);
  newRand = random(30, 50);
  rand1 = random(0, 255);
  rand2 = random(0, 255);
  rand3 = random(0, 255);
  
  stroke(255);
  noFill();
  let rect1 = rect(-800, 600, 50, 50);
  
  if(ballY <= windowHeight - (newRand / 2)) {
    //ballY += 3;
  }
  
  //strokeWeight(10);
  //stroke(rand1, rand2, rand3, 20);
  noStroke();
  fill(rand1, rand2, rand3, 50);
  
  if(focused) {
    if(count < 2000) {
      if(count % 10 == 0) {
        let circ1 = circle(ballX, ballY,  newRand);
      }
    }
    
    ballX = random(0, windowWidth);
    ballY = random(0, windowHeight);    
    
    count++; 
  }
}
