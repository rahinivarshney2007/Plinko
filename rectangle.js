class Rectangle{
    constructor(x,y){
        var options={
            isStatic:true,
restitution:0.5,
fricition:0.6,
density:0.4,
        }
        this.body=Bodies.rectangle(x,y,10,200,options)
        world.add(wo,this.body)
    }
    display(){
        var pos=this.body.position
        fill("blue")
        rectMode(CENTER)
        rect(pos.x,pos.y,10,200)
      
    }
}