class Sister {
    constructer (x,y,w,h){
        var options = {
            'friction':0.8,
            'density': 1.2,
            'isStatic': false

        }
        this.body = bodies.rectangle(x,y,w,h,options)
        this.w = w;
        this.h = h;
        this.image = loadImage("Sister.jpg");
        World.add(world, this.body);
    }
    display(){
        push();
        translate (this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        this.image(x,y,this.w,this.h);
        pop ();

    }

}
