class Eye {


  constructor(x,y,s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.angle = 0.0;

 }


update(mx, my) {

  this.angle = atan2(my-this.y, mx-this.x);

  }

display() {
    push();
    translate(this.x, this.y);

    fill(255);

    beginShape();
    vertex(-this.s,0);
    bezierVertex(-this.s/2,-this.s/1.5,this.s/2,-this.s/1.5,this.s,0);
    bezierVertex(this.s/2,this.s/1.5,-this.s/2,this.s/1.5,-this.s,0)
    endShape();
  //  ellipse(0, 0, this.s,this.s/2);
    rotate(this.angle);
  //  fill(80, 80, 255);
    //ellipse(this.s/3.6, 0, this.s/2.4, this.s/2.2);


    fill(61,158,237);
    ellipse(this.s/8, 0, this.s/1);

		fill(0);
    ellipse(this.s/5, 0, this.s/1.6);

    fill(255);
    ellipse(this.s/4.5, 0, this.s/15);

    pop();
  }
}
