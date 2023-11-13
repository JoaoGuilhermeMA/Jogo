import { Sprite } from './Sprite.js';

const gravity = 0.7

export class Fighter extends Sprite {
    constructor({ ctx, position, velocity, color = 'red', imageSrc, scale = 1, frameMax = 1, offSet = { x: 0, y: 0 }, sprites }) {
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
        this.sprites = sprites;

        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc;
        }
    }

    update() {
        this.draw();
        this.animateFrame()

        this.attackBox.position.x = this.position.x + this.attackBox.offSet.x;
        this.attackBox.position.y = this.position.y;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // gravity function
        if (this.position.y + this.height + this.velocity.y >= canvas.height - 90) {
            this.velocity.y = 0;
            this.position.y = 540;
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

    switchSprites(sprite) {
        switch (sprite) {
            case 'idle':
                if (this.image !== this.sprites.idle.image) {
                    this.frameMax = this.sprites.idle.frameMax;
                    this.image = this.sprites.idle.image;
                    this.frameCurrent = 0;
                }
                break;
            case 'run':
                if (this.image !== this.sprites.run.image) {
                    this.frameMax = this.sprites.run.frameMax;
                    this.image = this.sprites.run.image;
                    this.frameCurrent = 0;
                }
                break;
            case 'jump':
                if (this.image !== this.sprites.jump.image) {
                    this.frameMax = this.sprites.jump.frameMax;
                    this.image = this.sprites.jump.image;
                    this.frameCurrent = 0;
                }
                break;
            case 'fall':
                if (this.image !== this.sprites.fall.image) {
                    this.frameMax = this.sprites.fall.frameMax;
                    this.image = this.sprites.fall.image;
                    this.frameCurrent = 0;
                }
                break;
            case 'idle_invertido':
                if (this.image !== this.sprites.idle_invertido.image) {
                    this.frameMax = this.sprites.idle_invertido.frameMax;
                    this.image = this.sprites.idle_invertido.image;
                    this.frameCurrent = 0;
                }
                break;
            case 'run_invertido':
                if (this.image !== this.sprites.run_invertido.image) {
                    this.frameMax = this.sprites.run_invertido.frameMax;
                    this.image = this.sprites.run_invertido.image;
                    this.frameCurrent = 0;
                }
                break;
            case 'jump_invertido':
                if (this.image !== this.sprites.jump_invertido.image) {
                    this.frameMax = this.sprites.jump_invertido.frameMax;
                    this.image = this.sprites.jump_invertido.image;
                    this.frameCurrent = 0;
                }
                break;
            case 'fall_invertido':
                if (this.image !== this.sprites.fall_invertido.image) {
                    this.frameMax = this.sprites.fall_invertido.frameMax;
                    this.image = this.sprites.fall_invertido.image;
                    this.frameCurrent = 0;
                }
                break;
            default:
                break;
        }
    }
}
