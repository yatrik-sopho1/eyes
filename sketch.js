let e01;

let eyes = [];
var nr;
var nc;

function setup() {
var canvas =  createCanvas(windowWidth/2, windowHeight);
  canvas.parent('sketch-holder');


let canvas_width = windowWidth/2;
let eye_size = windowWidth/25;
 nr = canvas_width/(eye_size*4);
 nc = windowHeight/(eye_size/5);
 xgap=canvas_width/7;
 ygap=windowHeight/8;

  noStroke();
  noCursor();

  for(let j = 0 ; j<nc ; j++){
    xgap=canvas_width/7;
    for(let i = 0 ; i < nr ; i++){

      eyes.push(new Eye(xgap, ygap, eye_size));
      xgap += eye_size*3;

    }

ygap +=eye_size*2.1;

}


}


function draw() {

  background(240,128,102);


  for(let i = 0 ; i < nr+nc ; i++){

    eyes[i].update(mouseX,mouseY);
    eyes[i].display();
  }

  fill(255,80);
  ellipse(mouseX,mouseY,40);



}
