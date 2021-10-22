class Brother{
    constraint(x,y,w,h){
        var options = {
            'friction':1.4,
            'density':1.1,
            'isStatic':false

        }

        this.body = bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        this.image = loadImage("brother.jpg");
        World.add(world, this.body);
    }

    display(){
        push ();
        translate (this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        this.image(x,y,this.w,this.h);
        pop ();
    }
}