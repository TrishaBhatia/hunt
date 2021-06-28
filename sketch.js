var bg1,bg2;
var logo,hunt;
var stone;
var man,player;
var pp,paper;
gameState=0;
function preload()
{
	bg2=loadImage("bg2.jpg");
	bg1=loadImage("bg1.jpg");
	logo=loadImage("logo.png");
  man=loadImage("player.png");
  pp=loadImage("paper.png");
}

function setup() {
   createCanvas(1020,650);
   hunt=createSprite(179,270);
   hunt.addImage(logo);
   
   hunt.visibility=false;
   
 paper=createSprite(370,390);
   paper.addImage(pp);
   paper.scale=1;
}
function draw() 
{
  fill("white");
  textSize(30);
    text(mouseX + "," + mouseY, 200, 50);

	if (gameState===0)
	{

      background(bg1);
    hunt.scale=1.5;
	  hunt.visibility=true;
    paper.x=640;
    paper.y=303;
    
	}
  if(keyDown("space"))
  {
	gameState=1;
  background(255);
background(bg2);
  }
  if (gameState===1)
  {
    paper.x=105;
    paper.y=361;
    paper.scale=0.65;
	hunt.x=100;
	hunt.y=100;
  hunt.scale=0.8;

  player=createSprite(740,410);
  player.addImage(man);
  player.scale=0.18;
  
  if(keyIsDown(RIGHT_ARROW))
  {
    player.velocityX=2;
    player.velocityY=0;
  }
  
  if (keyIsDown(LEFT_ARROW))
  {
    player.velocityX=-2;
    player.velocityY=0;
  }
  
  if (keyIsDown(UP_ARROW))
  {
    player.velocityX=0;
    player.velocityY=-2;
  }
  
  if (keyIsDown(DOWN_ARROW))
  {
    player.velocityX=0;
    player.velocityY=2;
  }

 var brick=createSprite(550,450,480,10);
 brick.shapeColor=("brown");
 
 var brick1=createSprite(305,255,10,400);
 brick1.shapeColor=("brown");

 var brick2=createSprite(540,420,390,10);
 brick2.shapeColor=("brown");
 
 var brick3=createSprite(350,274,10,300);
 brick3.shapeColor=("brown");

 var brick3=createSprite(755,240,10,280);
 brick3.shapeColor=("brown");

 var brick4=createSprite(570,100,380,10);
 brick4.shapeColor=("brown");

  }

  drawSprites();
 
  }



