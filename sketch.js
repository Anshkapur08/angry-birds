const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var box3;
var box4;
var pig2;
var log2;
var box5;
var log3;
var log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,650,70,70);
    box2 = new Box(1100,650,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(1000,650,50,50)
    log1 = new Log(1000,600,280,PI/2)
    box3= new Box(900,550,70,70);
    box4 = new Box(1100,550,70,70);
    pig2=new Pig(1000,550,50,50)
    log2 = new Log (1000,500,280,PI/2)
    box5 = new Box (1000,450,70,70)
    log3 = new Log (950,400,130,PI/5)
    log4 = new Log (1050,400,130,-PI/5)
    bird = new Bird (200,200)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}