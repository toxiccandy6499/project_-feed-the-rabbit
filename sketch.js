var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImageImg = loadImage("redImage.png")
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprites = Math.round(random(1,3))
  if(frameCount % 80 == 0 ){
      if (select_sprites == 1){
        createApples()
      }
      else if (select_sprites == 3) {
        createOrangeLeaf();
      }
      else if (select_sprites == 2)  {
        createRedImage();
      }
    }  

}



function createApples(){

  apple = createSprite(random(50,350),40,10,10);
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
    
   
}

function createRedImage(){

  redImage = createSprite(random(50,350),40,10,10);
  redImage = createSprite(random(50,350),40,10,10);
  redImage.addImage(redImageImg);
  redImage.scale =0.07;
  redImage.velocityY = 3;
  redImage.lifetime = 150;

}
 
function createOrangeLeaf(){
  orangeLeaf = createSprite(random(50,350),40,10,10)
  orangeLeaf = createSprite(random(50, 350),40, 10, 10);
orangeLeaf.addImage(OrangeLeafImg);
orangeLeaf.scale = 0.07;
orangeLeaf.velocityY = 3;
orangeLeaf.lifetime = 150;


}
