const gravity = 0.7

export class Sprite {
    constructor({ ctx, position, imageSrc }) {
        this.position = position;
        this.width = 50;
        this.height = 150;
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y);
    }

    update() {
        this.draw();

    }
}
