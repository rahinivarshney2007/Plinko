const engine=Matter.Engine
const world=Matter.World
const Bodies=Matter.Bodies
var en,wo
var particles=[]
var plinkos=[]
var rectangles=[]
function setup() {
  createCanvas(800,400);
en=engine.create()
wo=en.world

for(var i=50;i<800;i=i+50){
plinkos.push(new Plinko(i,150))
}
for(var i=50;i<800;i=i+50){
  plinkos.push(new Plinko(i,250))
  }
var options={
  isStatic:true,
  density:0.5,
  restitution:0.6,
  friction:0.5
}
g=Bodies.rectangle(400,380,800,30,options)
world.add(wo,g)
for(var b=50;b<800;b=b+100){
rectangles.push(new Rectangle(b,350))
}
}

function draw() {
  background("black");  
  engine.update(en)
  if(frameCount % 60===0){
particles.push(new Particle(random(50,750),10))
  }
  for(var j=0;j<particles.length;j++){
particles[j].display()
  }
  for(var k=0;k<plinkos.length;k++){
plinkos[k].display()
  }
  for(var a=0;a<plinkos.length;a++){
    plinkos[a].display()
      }
      rect(g.position.x,g.position.y,800,30)

for(var o=0;o<rectangles.length;o++){
rectangles[o].display()
}
 // particle1.display()
  drawSprites();
}
