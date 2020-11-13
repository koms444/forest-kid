class Kid {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadAnimation("kid1.png","kid2.png","kid3.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  //    imageMode(CENTER);
      Animation(this.image,pos.x, pos.y, this.width, this.height);
    }
  };