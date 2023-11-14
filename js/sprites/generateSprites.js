import { Sprite } from "../Sprite.js";
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

const background = new Sprite({
    ctx: c,
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/background.png'
});

const bird = new Sprite({
    ctx: c,
    position: {
        x: 100,
        y: 268
    },
    imageSrc: './assets/bird/Idle.png',
    scale: 3,
    frameMax: 4
});

export function spriteBird() {
    return bird
}

export function spriteBackground() {
    return background
}