export class Sprite {
    constructor({ ctx, position, imageSrc, scale = 1, frameMax = 1, offSet = { x: 0, y: 0 } }) {
        this.position = position;
        this.width = 50;
        this.height = 150;
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = imageSrc;
        this.scale = scale;
        this.frameMax = frameMax;
        this.frameCurrent = 0;
        this.frameElapsed = 0;
        this.framehold = 10;
        this.offSet = offSet
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.frameCurrent * (this.image.width / this.frameMax),
            0,
            this.image.width / this.frameMax,
            this.image.height,
            this.position.x - this.offSet.x,
            this.position.y - this.offSet.y,
            (this.image.width / this.frameMax) * this.scale,
            this.image.height * this.scale);
    }

    animateFrame(){
        this.frameElapsed++;
        if (this.frameElapsed % this.framehold === 0) {
            if (this.frameCurrent < this.frameMax - 1) {
                this.frameCurrent++;
            } else {
                this.frameCurrent = 0;
            }
        }
    }

    update() {
        this.draw();
        this.animateFrame();
    }
}
