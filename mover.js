class Mover{
  constructor(img){
    this.pos=createVector(30,300);
    this.vel=createVector(1,0);
    this.acc=createVector(0,0);
    this.pic=img;
    this.score=0;
                         
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }
  
  show(){
    fill("blue");
    // ellipse(this.pos.x,this.pos.y, 50,50);
    image(this.pic, this.pos.x,this.pos.y, 50,50);
    textSize(25);
    text("SCORE: "+ this.score, this.pos.x,100);
  }
  
  applyForce(f){
    this.acc.add(f);
  }
  
  edges(){
    if(this.pos.y>350){
      this.vel.y*=-0.5;
      this.pos.y=350
    }
    //added edge so that baker cannot leave the canvas 
    if(this.pos.y<0){
      this.vel.y*=-0.5;
      this.pos.y=1;
    }
  }
  
  //this method is called in the "game" function of sketch on each and every "baddie", o. within the method, if the position of the baddy andthe hero intersect, then we increase the score accordingto the point value of the baddy
  hit(o){
    if((o.pos.x >= this.pos.x && o.pos.x <= (this.pos.x + 80)) &&
        (o.pos.y >= this.pos.y && o.pos.y <= (this.pos.y + 80))) {
        o.pos.y = -400;
      this.score = this.score+ o.pntVal; 
       // this.score++;
  
    
    }
    
  }
  
}
