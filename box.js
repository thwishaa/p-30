class Box extends Base {
    constructor(x, y, width, height){
      super(x,y,width,height);
      //this.image = loadImage("sprites/wood1.png");
      this.Visiblity = 255;
    }
  
  
  display(){
  if(this.body.speed < 3){
    console.log(this.body.speed);
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }
}