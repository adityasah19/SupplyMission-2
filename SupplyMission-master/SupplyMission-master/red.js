class Red{
constructor(x,y,width,height){
this.body=Bodies.rectangle(200,200,50,30)
this.body=Bodies.rectangle(200,200,50,30)
this.body=Bodies.rectangle(200,200,50,30)
World.add(this.body)
}
display(){
    var pos=this.body.position
   this.body.color=('red') 
    push();
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop();
    
    }
    














}