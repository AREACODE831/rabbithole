
class Fail {
  constructor(){
    this.r = 50;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 3;
    // this.r = 60;
    // this.x = random(w);
    // this.y = h - this.r;
    // this.img1 = loadImage('asset/hole.png');

  }
  display(){
    //fill(0);
    //ellipse(this.x, this.y, this.r, this.r);
    image(failImg, this.x, this.y, this.r*2.5, this.r*1.5);

  }

  move(){
      // this.y++;
      this.y += this.speed;

  }
}
