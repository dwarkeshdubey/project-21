var block1, block2, block3, block4;
var ball;
var canvas;
var music;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(100,590,180,20);
block1.shapeColor="red";

block2=createSprite(300,590,180,20);
block2.shapeColor="green";

block3=createSprite(500,590,180,20);
block3.shapeColor="blue";

block4=createSprite(700,590,180,20);
block4.shapeColor="yellow";




    //create box sprite and give velocity
    ball=createSprite(random(10,750),300,20,20);
    ball.shapeColor="white";
  ball.velocityX=4;
  ball.velocityY=9;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges)
if(block1.isTouching(ball)&&ball.bounceOff(block1)){
    ball.shapeColor="red";
    music.play();
}
if(block2.isTouching(ball)){
    ball.shapeColor="green";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop()

}
if(block3.isTouching(ball)&&ball.bounceOff(block3)){
    ball.shapeColor="blue";
    
}
if(block4.isTouching(ball)&&ball.bounceOff(block4)){
    ball.shapeColor="yellow";
    
}
drawSprites();
    //add condition to check if box touching surface and make it box
}
