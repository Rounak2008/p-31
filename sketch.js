const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var drops=[];
var maxDrops=100;

function preload(){
    
}

function setup(){
 engine=Engine.create();
world=engine.world;
createCanvas(400,700); 

if(frameCount%150===0){
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drops(random(0,400),random(0,400)));  
}
}
    
}

function draw(){
background(0);
Engine.update(engine);

for(var i=0;i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
}
    
drawSprites();


}   

