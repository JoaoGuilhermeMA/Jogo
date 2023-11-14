import { Sprite } from "./Sprite.js";

const gravity = 0.7;

export class Fighter extends Sprite {
    constructor({
        ctx,
        position,
        velocity,
        color = "red",
        imageSrc,
        scale = 1,
        frameMax = 1,
        offSet = { x: 0, y: 0 },
        sprites,
        attackBox = { offSet: {}, width: undefined, height: undefined },
        width = 50,
        height = 150,
    }) {
        super({
            ctx,
            position,
            imageSrc,
            scale,
            frameMax,
            offSet,
        });
        this.health = 100;
        this.frameCurrent = 0;
        this.frameElapsed = 0;
        this.framehold = 8;
        this.velocity = velocity;
        this.width = width;
        this.height = height;
        this.lastKey;
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            offSet: attackBox.offSet,
            width: attackBox.width,
            height: attackBox.height,
        };
        this.color = color;
        this.isAttacking = false;
        this.ctx = ctx;
        this.inFloor = true;
        this.sprites = sprites;
        this.infront = true;
        this.dead = false;

        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc;
        }
    }

    update() {
        this.draw();
        if (!this.dead) {
            this.animateFrame();
        }

        // attack box
        this.attackBox.position.x = this.position.x + this.attackBox.offSet.x;
        this.attackBox.position.y = this.position.y + this.attackBox.offSet.y;

        this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        this.ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);

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

    attack(attack) {
        if (attack === ' ') {
            if (this.infront) {
                this.switchSprites("attack1");
            } else {
                this.switchSprites("attack1_invertido");
            }
        } else if (attack === 'e') {
            if (this.infront) {
                this.switchSprites("attack2");
            } else {
                this.switchSprites("attack2");
            }
        } else if (attack === '0') {
            if (this.infront) {
                this.switchSprites("attack1");
            } else {
                this.switchSprites("attack1_invertido");
            }
        } else {
            this.switchSprites("attack2")
        }
        this.isAttacking = true;
    }

    takeHit() {
        this.health -= 20;
        if (this.infront) {
            if (this.health <= 0) {
                this.switchSprites('death')
            } else {
                this.switchSprites('takeHit');
            }
        } else {
            if (this.health <= 0) {
                this.switchSprites('death_invertido')
            } else {
                this.switchSprites('takeHit_invertido');
            }
        }
        console.log(this.health)
    }

    switchSprites(sprite) {
        if (this.image === this.sprites.death.image || this.image === this.sprites.death_invertido.image) {
            if ((this.frameCurrent === this.sprites.death.frameMax - 1) || (this.frameCurrent === this.sprites.death_invertido.frameMax - 1)) {
                this.dead = true;
            }
            return
        }

        // overriding all other animations with the attack animation
        if ((this.image === this.sprites.attack1.image && this.frameCurrent < this.sprites.attack1.frameMax - 1) ||
            (this.image === this.sprites.attack1_invertido.image && this.frameCurrent < this.sprites.attack1_invertido.frameMax - 1)) {
            return;
        }

        // || (this.image === this.sprites.attack1_invertido.image && this.frameCurrent < this.sprites.attack1_invertido.frameMax - 1)
        if ((this.image === this.sprites.attack2.image && this.frameCurrent < this.sprites.attack2.frameMax - 1)) {
            return;
        }

        // overriding all other animations with the take hit animation
        if ((this.image === this.sprites.takeHit.image && this.frameCurrent < this.sprites.takeHit.frameMax - 1) ||
            (this.image === this.sprites.takeHit_invertido.image && this.frameCurrent < this.sprites.takeHit_invertido.frameMax - 1)) {
            return;
        }

        switch (sprite) {
            case "idle":
                if (this.image !== this.sprites.idle.image) {
                    this.frameMax = this.sprites.idle.frameMax;
                    this.image = this.sprites.idle.image;
                    this.frameCurrent = 0;
                }
                break;
            case "run":
                if (this.image !== this.sprites.run.image) {
                    this.frameMax = this.sprites.run.frameMax;
                    this.image = this.sprites.run.image;
                    this.frameCurrent = 0;
                }
                break;
            case "jump":
                if (this.image !== this.sprites.jump.image) {
                    this.frameMax = this.sprites.jump.frameMax;
                    this.image = this.sprites.jump.image;
                    this.frameCurrent = 0;
                }
                break;
            case "fall":
                if (this.image !== this.sprites.fall.image) {
                    this.frameMax = this.sprites.fall.frameMax;
                    this.image = this.sprites.fall.image;
                    this.frameCurrent = 0;
                }
                break;
            case "attack1":
                if (this.image !== this.sprites.attack1.image) {
                    this.frameMax = this.sprites.attack1.frameMax;
                    this.image = this.sprites.attack1.image;
                    this.frameCurrent = 0;
                }
                break;
            case "takeHit":
                if (this.image !== this.sprites.takeHit.image) {
                    this.frameMax = this.sprites.takeHit.frameMax;
                    this.image = this.sprites.takeHit.image;
                    this.frameCurrent = 0;
                }
                break;
            case "death":
                if (this.image !== this.sprites.death.image) {
                    this.frameMax = this.sprites.death.frameMax;
                    this.image = this.sprites.death.image;
                    this.frameCurrent = 0;
                }
                break;
            case "attack2":
                if (this.image !== this.sprites.attack2.image) {
                    console.log(this.sprites.attack1);
                    this.frameMax = this.sprites.attack2.frameMax;
                    this.image = this.sprites.attack2.image;
                    this.frameCurrent = 0;
                }
                break;
            case "idle_invertido":
                if (this.image !== this.sprites.idle_invertido.image) {
                    this.frameMax = this.sprites.idle_invertido.frameMax;
                    this.image = this.sprites.idle_invertido.image;
                    this.frameCurrent = 0;
                }
                break;
            case "run_invertido":
                if (this.image !== this.sprites.run_invertido.image) {
                    this.frameMax = this.sprites.run_invertido.frameMax;
                    this.image = this.sprites.run_invertido.image;
                    this.frameCurrent = 0;
                }
                break;
            case "jump_invertido":
                if (this.image !== this.sprites.jump_invertido.image) {
                    this.frameMax = this.sprites.jump_invertido.frameMax;
                    this.image = this.sprites.jump_invertido.image;
                    this.frameCurrent = 0;
                }
                break;
            case "fall_invertido":
                if (this.image !== this.sprites.fall_invertido.image) {
                    this.frameMax = this.sprites.fall_invertido.frameMax;
                    this.image = this.sprites.fall_invertido.image;
                    this.frameCurrent = 0;
                }
                break;
            case "attack1_invertido":
                if (this.image !== this.sprites.attack1_invertido.image) {
                    this.frameMax = this.sprites.attack1_invertido.frameMax;
                    this.image = this.sprites.attack1_invertido.image;
                    this.frameCurrent = 0;
                }
                break;
            case "takeHit_invertido":
                if (this.image !== this.sprites.takeHit_invertido.image) {
                    this.frameMax = this.sprites.takeHit_invertido.frameMax;
                    this.image = this.sprites.takeHit_invertido.image;
                    this.frameCurrent = 0;
                }
                break;
            case "death_invertido":
                if (this.image !== this.sprites.death_invertido.image) {
                    this.frameMax = this.sprites.death_invertido.frameMax;
                    this.image = this.sprites.death_invertido.image;
                    this.frameCurrent = 0;
                }
                break;
            default:
                break;
        }
    }
}
