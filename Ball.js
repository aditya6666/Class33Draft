class Ball {
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution:0.5,
            friction:0.5,
            density:1.2
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
    display(){

        var ballposition = this.body.position;
        push();
        translate(ballposition.x,ballposition.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("black");
        ellipse(this.x,this.y,this.r,this.r);
        pop();
    }


}