/* Define a Ball Class */
class Ball {
    constructor(x, y, color) {
        this.color = color;
        this.size = 20;
        this.posX = x;
        this.posY = y;
        this.dx = 2;
        this.dy = 0;
    }

    toString() {
        let str;
        str = `This ball is ${this.color}, is ${this.size} large, and is currently located at x: ${this.posX}, y: ${this.posY}`;
        return str;
    }

    move() {
        this.posX += this.dx;
        this.posY += this.dy;
    }

    get deltas() {
        return [this.dy, this.dx];
    }
    set deltaDiag( delta ) {
        // check that the input parameter is valid
        // if it is, then set deltaX new value
        if ((typeof delta) === "number") {
            this.dx = delta;
            this.dy = delta;
        }
    }
}


/* **************************************************** */

/* Use the Ball Class */
let ball;
ball = new Ball( 0, 0, 'red' );

console.log( ball.toString() );
// -> 'This ball is red, is 20 large, and is currently located at x: 0, y: 0'

ball.move();
// no output

// NOTE: the ball as moved
console.log( ball.toString() );
// -> 'This ball is red, is 20 large, and is currently located at x: 2, y: 0'

// print the delta set
console.log( "The delta set is: " + ball.deltas );

// change both deltas with the setter
ball.deltaDiag = -10;

// print the delta set
console.log( "The delta set is: " + ball.deltas );

// move the ball
ball.move();
console.log( ball.toString() );
