const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerB;
var computerB
var computerP



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerB = new playerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerB.body.position.y - 153, 50, 180);

  computerB = new computerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computerP = new computerPlayer(
    width - 280,
    computerB.body.position.y - 153,
    50,
    180
  )

  


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerB.display();
   computerB.display();


   //display Player and computerplayer
   player.display();
   computerP.display();


}
