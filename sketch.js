var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //music.addSound(music);

   surface1 = createSprite(650,560,150,20);
   surface1.shapeColor="yellow";

   surface2 = createSprite(490,560,150,20);
   surface2.shapeColor="orange";

   surface3 = createSprite(330,560,150,20);
   surface3.shapeColor="magenta";

   surface4 = createSprite(170,560,150,20);
   surface4.shapeColor="blue";


   box = createSprite(random(20,750),200,30,30);
   box.shapeColor="white";
   box.velocityX = -3
   box.velocityY = -3;

   




}

function draw() {
    background(rgb(169,169,169));


    edges = createEdgeSprites(); 
    box.bounceOff(edges);


if(surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor="yellow";
   }
   if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor="orange";
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="magenta";
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
      box.shapeColor="blue";
}


    

    drawSprites();
}
