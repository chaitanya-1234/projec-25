const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,paper;
var ground ;




function setup(){
    var canvas = createCanvas(1450,700);
    engine = Engine.create();
    world = engine.world;

    
	ground = new Ground(725,height,1450,20)


    box1= new Box(1150,620,200,40);
  box2= new Box(1250,600,20,100);
  box3= new Box(1050,600,20,100)
    

    paper = new Crumpleball(100,650,30,30);

}

function draw(){
    background(0);

    Engine.update(engine);
	console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    

	box3.display();
	paper.display();
	ground.display();
    

	drawSprites();
}

function keyPressed(){
if (keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}


}


