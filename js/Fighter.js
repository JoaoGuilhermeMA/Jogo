import { Sprite } from './Sprite.js';

const gravity = 0.7

export class Fighter extends Sprite {
    constructor({ ctx, position, velocity, color = 'red', imageSrc, scale = 1, frameMax = 1, offSet = { x: 0, y: 0 } }) {
        super({
            ctx,
            position,
            imageSrc,
            scale,
            frameMax,
            offSet
        });
        this.frameCurrent = 0;
        this.frameElapsed = 0;
        this.framehold = 8;
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

    update() {
        this.draw();
        this.animateFrame()
        
        this.attackBox.position.x = this.position.x + this.attackBox.offSet.x;
        this.attackBox.position.y = this.position.y;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // touch the floor
        if (this.position.y + this.height + this.velocity.y >= canvas.height - 90) {
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
