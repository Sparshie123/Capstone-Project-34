class Mango{

constructor(x,y,r) {
this.x=x
this.y=y
this.r=r 
this.body=Bodies.circle(x,y,r,mango_options)
this.image=loadImage("mango.png")

var mango_options={
isStatic:true 

}








World.add(this.world,this.body)   
}

}