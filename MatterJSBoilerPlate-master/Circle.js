class circle {
    constructor(x,y){
         var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
       
        

    this.bodie = Bodies.circle(x,y,20,options);
   
    
    World.add(world,this.bodie)
    }
    
    display(){
        var pos = this.bodie.position;
        push()
        translate(pos.x,pos.y)

        ellipseMode(RADIUS);
        fill("brown");
        ellipse(pos.x,pos.y,20,20);
        pop()
    }

}