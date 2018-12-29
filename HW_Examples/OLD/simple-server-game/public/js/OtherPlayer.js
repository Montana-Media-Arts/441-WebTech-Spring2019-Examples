/* jshint esversion: 6 */

class OtherPlayer {
    constructor() {
        this.pos = createVector( 0, 0 );
        this.vel = createVector( 0, 0 );

        // size should be 0-100
        this.size = 30;
    }

    frame() {
        this.display();
    }


    display() {
        push();

        // Position the player
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());

        // Draw the player
        noStroke();
        fill(0);
        triangle(
            this.size, 0, -this.size * 0.25, this.size * 0.33, -this.size * 0.25, -this.size * 0.33
        );
        ellipse(-this.size * 0.25, 0, this.size * 0.75, this.size * 0.66);

        pop();
    }
}


/*************** socket data ***************/
