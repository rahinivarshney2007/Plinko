class Particle{
    constructor(x,y){
        var options={
restitution:0.7,
friction:0.8,
density:0.4,
        }
        this.body=Bodies.circle(x,y,8,options)
        world.add(wo,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        fill(random(0,255),random(0,255),random(0,255))
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,8)
        pop()
      
    }
}