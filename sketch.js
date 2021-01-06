const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform , ground ;
var slingShot;
var score = 0;
var backgroundImg;

var gameState = "onSling";
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;

function preload() {
    getbackgroundImage();
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(1200,400);

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    box3 = new box(700,240,70,70);
    box4 = new box(920,240,70,70);
    box5 = new box(810,160,70,70);
    box6 = new box(700,320,70,70);
    box7 = new box(920,320,70,70);
    box8 = new box(700,240,70,70);
    box9 = new box(920,240,70,70);
    box10 = new box(810,160,70,70);
    box11 = new box(700,320,70,70);
    box12 = new box(920,320,70,70);
    box13 = new box(700,240,70,70);
    box14 = new box(920,240,70,70);
    box15 = new box(810,160,70,70);
    box16 = new box(700,320,70,70);

  
    polygon1 = new polygon(200,50);

   
    slingshot = new SlingShot(polygon1.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    textSize(35);
    fill("white")
    text("SCORE: "+score,width-300,50);
    Engine.update(engine);
   // strokeWeight(4);
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    polygon1.display();
    platform.display();
    slingshot.display();   
    ground.display(); 
}

function mouseDragged(){
    // if(gameState!=="launched"){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(polygon.body);
    }
}

async function getbackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour)
    if(hour<=19 && hour>=6){
        bg = "bg2.jpg";
    }
    else{
        bg = bg1.png;
    }
    backgroundImg = loadImage(bg);
}
