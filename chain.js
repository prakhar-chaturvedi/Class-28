class Chain {
 constructor ( bodyA, bodyB ){
    var options = {
        bodyA : bodyA,
        bodyB : bodyB,
        stiffness : 2,
        length : 30,
        
    } 
    this.chain = Matter.Constraint.create(options);
    World.add(world,this.chain,)
 }
    
    display(){
    var pa = this.chain.bodyA.position;
    var pq = this.chain.bodyB.position;
    push();
    stroke("teal");
    strokeWeight(5);
    line(pa.x,pa.y,pq.x,pq.y);
    pop();
    }


}