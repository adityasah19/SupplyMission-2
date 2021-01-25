class Red{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        //this.body.color=('red')
        World.add(world,this.body)
        }
        display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill ('red')
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
        
        }
    }
    
    













