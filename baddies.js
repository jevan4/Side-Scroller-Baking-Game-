class Baddies {
  constructor(img,pointValue) {
    this.pos = createVector(random(1000), random(400));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.pic = img;
    this.pntVal = pointValue; 
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill("green");
    // ellipse(this.pos.x,this.pos.y, 50,50);
    image(this.pic, this.pos.x, this.pos.y, 50, 50);
  }
}
