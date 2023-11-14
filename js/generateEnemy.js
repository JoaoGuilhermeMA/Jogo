import { Fighter } from './Fighter.js'
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

const enemy = new Fighter({
    position: {
        x: 400,
        y: 100
    },
    width: 100,
    velocity: {
        x: 0,
        y: 0
    },
    ctx: c,
    offSet: {
        x: -50,
        y: 0
    },
    imageSrc: './assets/2/Idle_invertido.png',
    frameMax: 10,
    scale: 3,
    offSet: {
        x: 140, // 215
        y: 95   // 95
    },
    sprites: {
        idle: {
            imageSrc: './assets/2/Idle.png',
            frameMax: 10
        },
        run: {
            imageSrc: './assets/2/Run.png',
            frameMax: 8,
        },
        jump: {
            imageSrc: './assets/2/Jump.png',
            frameMax: 3,
        },
        fall: {
            imageSrc: './assets/2/Fall.png',
            frameMax: 3,
        },
        attack1: {
            imageSrc: './assets/2/Attack1.png',
            frameMax: 7,
        },
        idle_invertido: {
            imageSrc: './assets/2/Idle_invertido.png',
            frameMax: 10
        },
        run_invertido: {
            imageSrc: './assets/2/Run_invertido.png',
            frameMax: 8,
        },
        jump_invertido: {
            imageSrc: './assets/2/Jump_invertido.png',
            frameMax: 3,
        },
        fall_invertido: {
            imageSrc: './assets/2/Fall_invertido.png',
            frameMax: 3,
        },
        attack1_invertido: {
            imageSrc: './assets/2/Attack1_invertido.png',
            frameMax: 7,
        },
        takeHit: {
            imageSrc: './assets/2/Takehit.png',
            frameMax: 3,
        },
        takeHit_invertido: {
            imageSrc: './assets/2/TakeHit_invertido.png',
            frameMax: 3,
        },
        death: {
            imageSrc: './assets/2/Death.png',
            frameMax: 11,
        },
        death_invertido: {
            imageSrc: './assets/2/Death_invertido.png',
            frameMax: 11,
        },
        attack2: {
            imageSrc: './assets/2/Attack3.png',
            frameMax: 9,
        },
        attack2_invertido: {
            imageSrc: './assets/2/Attack3_invertido.png',
            frameMax: 9,
        }
    },
    attackBox: {
        offSet: {
            x: -300,
            y: -50
        },
        width: 140,
        height: 200
    }
});

export function selectedSpriteEnemy() {
    return enemy
}