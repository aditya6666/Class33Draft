class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:0
        };
      
    
    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
        
        if(this.rope.bodyA!=null){
        push();
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
        strokeWeight(5);
        fill("red");
        pop();
        }
    }
}