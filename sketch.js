const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1900,800);
    engine = Engine.create();
    world = engine.world;

   // ball = new Ball(400,500,25);
   base = new Ground(950,795,1900,30);
   box1 = new Box(1500,750,70,70);
   box2 = new Box(1350,750,70,70);
   box3 = new Box(1650,750,70,70);
   box4 = new Box(1200,750,70,70);
   box5 = new Box(1800,750,70,70);

  /* box6 = new Box(1350,750,70,70);
   box7 = new Box(1300,750,70,70);
   box8 = new Box(1650,750,70,70);
   box9 = new Box(1700,750,70,70);*/

   box10 = new Box(1500,600,70,70);
   box11= new Box(1350,600,70,70);
   box12= new Box(1650,600,70,70);
   box13= new Box(1200,600,70,70);
   box14 = new Box(1800,600,70,70);
  // box15 = new Box(1350,600,70,70);
   /*
   box16 = new Box(1300,700,70,150);
   box17 = new Box(1650,700,70,150);
   box18 = new Box(1700,700,70,150);*/

   box15 = new Box(1500,450,70,70);
   box16= new Box(1350,450,70,70);
   box17= new Box(1650,450,70,70);
   box18= new Box(1200,450,70,70);
   box19 = new Box(1800,450,70,70);

   box20 = new Box(1500,300,70,70);
   box21= new Box(1350,300,70,70);
   box22= new Box(1650,300,70,70);
   box23= new Box(1200,300,70,70);
   box24 = new Box(1800,300,70,70);

   ball = new Ball()
}

function draw(){
    background("yellow");
    Engine.update(engine);
    base.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
   
}