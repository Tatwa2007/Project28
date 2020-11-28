class Mango{
    constructor(x, y, radius, angle) {
        var options = {
            isStatic:'false', 
            'friction':0.5,
            'density':1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill ("yellow");
        image( this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}