class Stone {

constructor(x,y,r,angle) {

    this.x=x
    this.y=y
    this.r=r
    this.angle=angle
    this.image=image
    
    
this.body=Bodies.circle(x,y,this.r,angle,properties)
 this.image=addImage(stoneImg)   
var properties={

    isStatic:true
}



World.add(world,this.body)

display() 
    if(keyisDown(UP_ARROW)&& angle<10) {
        stone.angle=stone.angle+1
      }
      if(keyisDown(DOWN_ARROW)&& angle<160){
        stone.angle=stone.angle-1
      }

push() 
    rotate(this.angle)
    imageMode(CENTER)
    image(stoneImg,0,0,this.x,this.y,this.r,this.angle,properties)
    pop()
    image(stoneImg,0,0,375,453,20,100,properties)

}



shoot() {
    this.angle=this.angle*(3.14/180)
   Matter.Body.setStatic(this.body,false) 
   Matter.Body.setVelocity(this.body,{
       x:velocity.x*(180/3.14),
       y:velocity.y*(180/3.14)
     })
   var velocity=p5.Vector.fromAngle(this.angle)
   velocity.mult(0.9)

}




}
