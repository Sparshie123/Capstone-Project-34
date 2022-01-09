// You are starving for food and you stumble across a mango tree. 
//But it is too high for you to reach with your hands. 
// To help you, you are aiming for them with a stone! Good luck!
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango,mangoImg

var stone,stoneImg
var player,playerImg
var p_set
var ground
var backdrop
 var mango_options 
 var tree,treeImg
 var p_sound
var score=0

function preload() {
p_set=loadImage("park2.png")
stoneImg=addImage(stone)
playerImg=loadImage("player.png")
mangoImg=addImage(mango)
treeImg=loadImage("tree.png")
p_sound=loadImage("sound123.mp3")

}


function setup() {
  createCanvas(500,500);

angleMode(DEGREES)



player.addImage(playerImg) 
player.position(375,450)
tree=createSprite(150,450,100,200)
tree.addImage(treeImg)
tree.scale=0.8
ground=createSprite(50,490,50,20)
ground.visible=false

  engine = Engine.create();
  world = engine.world;
  

  mango=new Mango({x:145,y:445,r:50,mango_options})
  stone=new Stone({x:375,y:453,r:20,angle:100,properties})
 stone.display()
  
  
 
}


function draw() 
{
  background(51)
  image(p_set,0,0,500,500)
  text("Score",score,450,15)
  strokeWeight(0)
   fill("lime")
 p_sound.play()
 p_sound.setVolume(0.3)
  if(collide(stone,mango)==true) {
    
    mango.fall()
    stone.remove()
    stone.spawnStones()
  }
if(collide(stone,ground)==true) {
  score=score-5
  stone.remove()
  stone.spawnStones()
}

   if(collide(mango,ground)) {
   score=score+5
   mango.appearMangoes()
   playSound("sound://category_achievements/retro_game_classic_power_up_2.mp3")
   stone.spawnStones()
   }
  
  if(keyDown(SPACE)) {
    stone.shoot()
  }
  
  
  
  Engine.update(engine);

  
  
}

drawSprites()


function fall() {
  Matter.setStatic(this.body,false)
Matter.Body.setVelocity({x:0,y:5})



}
fill("#FFFF");
textAlign("center");
textSize(30);
text("Mauling the Mangoes", 250, 100);

function appearMangoes() {

if(frameCount%60 === 0) {
mango.y=Math.round(random(80,160))
mango.x=Math.round(random(20,100))


}



}

function spawnStones() {

if(stone.shoot && frameCount%5==0) {
stone.y=Math.round(random(448,450))
stone.x=Math.round(random(373,375))



}



}

function stopSound() {
console.log("Press the Right Arrow for the music to stop!")
if(keyDown(RIGHT_ARROW)) {

  p_sound.stop()
}



}