class dustbin {
    constructor(x,y,width,height){
         var options = {
            isStatic: true,
        }
    this.bodie = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    
    World.add(world,this.bodie)
    }
    
    display(){
        var pos = this.bodie.position;
        rectMode(CENTER);
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height)
    }

}