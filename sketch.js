var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var divisions = [];  
var plinkos = [];

var particle;

var divisionHeight=300;

var score =0;

var turn = 0;

gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {  
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {    
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {    
       plinkos.push(new Plinko(j,375));
    }

}
 
function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();
     if(particle.body.position.y > 760){
      if(particle.body.position.x < 330){
        score = score+50;
        particle=null;
        if(turn>=5){
          gameState = "end";
        }
      }
    }
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y > 760){
     if(particle.body.position.x < 565 && particle.body.position.x > 330){
       score = score+10;
       particle=null;
       if(turn>=5){
         gameState = "end";
       }
     }
   }
 }
 if(particle!=null){
  particle.display();
  if(particle.body.position.y > 760){
   if(particle.body.position.x < 805 && particle.body.position.x > 565){
     score = score+20;
     particle=null;
     if(turn>=5) gameState = "end";
   }
 }
}

   text("Score : "+score,30,40);

   textSize(25);
   text("50",25,550);
   text("50",105,550);
   text("50",185,550);
   text("50",265,550);
   text("10",345,550);
   text("10",425,550);
   text("10",505,550);
   text("20",585,550);
   text("20",665,550);
   text("20",745,550);

   if(gameState === "end"){
    textSize(80);
    text("Game Over",200,250);
  }
}

function mousePressed(){
  if(gameState !== "end"){
    turn++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}