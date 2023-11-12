const gravity = 0.7

export class Fighter {
    constructor({ ctx, position, velocity, color = 'red', offSet}) {
        this.position = position;
        this.velocity = velocity;
        this.width = 50;
        this.height = 150;
        this.lastKey
        this.attackBox = {
            position: {
                X: this.position.x,
                y: this.position.y 
            },
            offSet: offSet,
            width: 100,
            height: 50
        }
        this.color = color;
        this.isAttacking = false;
        this.ctx = ctx;
        this.inFloor = true;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);


        // attack box
        if (this.isAttacking) {
            this.ctx.fillStyle = 'green'
            this.ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);
        }
    }

    update() {
        this.draw();
        this.attackBox.position.x = this.position.x + this.attackBox.offSet.x;
        this.attackBox.position.y = this.position.y; 

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // touch the floor
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0;
            this.inFloor = true;
        } else {
            this.velocity.y += gravity;
        }
    }

    attack() {
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false;
        }, 100);
    }
}
