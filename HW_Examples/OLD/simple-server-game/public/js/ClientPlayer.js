/* jshint esversion: 6 */

class ClientPlayer {
    constructor(init_x, init_y, size) {

        this.idx = null;

        this.pos = createVector(init_x, init_y);
        this.vel = createVector( 0, 0 );
        this.acc = createVector( 0, 0 );
        this.maxSpeed = 10;
        // size should be 0-100
        this.size = size;
        this.emitData = {
            idx: this.idx,
            pos: { x: 0, y: 0 },
            vel: { x: 0, y: 0 },
            size: this.size
        };
    }

    frame() {
        this.move();
        this.display();
        this.emit();
    }

    display() {
        push();

        // Position the player
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());

        // Draw the player
        noStroke();
        triangle(
            this.size, 0, -this.size * 0.25, this.size * 0.33, -this.size * 0.25, -this.size * 0.33
        );
        ellipse(-this.size * 0.25, 0, this.size * 0.75, this.size * 0.66);

        pop();
    }


    move() {
        // track the mouse
        var moveAmt;
        var mult = 1;

        moveAmt = p5.Vector.sub(mouse, this.pos);
        var dis = moveAmt.mag();
        moveAmt.normalize();

        mult = map(dis, 0, width, 0, 4);

        if (dis < 120) {
            this.vel.mult(0.808);
        }

        this.acc = moveAmt;
        this.acc.mult(mult);
        this.vel.add(this.acc);
    	this.vel.limit(10);
        this.pos.add(this.vel);
    }


    emit() {

        // Update values
        this.emitData.pos.x = this.pos.x;
        this.emitData.pos.y = this.pos.y;
        this.emitData.vel.x = this.vel.x;
        this.emitData.vel.y = this.vel.y;

        // console.log(this.emitData);

        socket.emit('player', this.emitData);
    }


    setIdx(idx) {
        this.idx = idx;
        this.emitData.idx = idx;
        console.log("My Idx is: " + me.idx);
    }

}
