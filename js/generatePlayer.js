import { Fighter } from './Fighter.js'
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

const player = new Fighter({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    ctx: c,
    offSet: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/1/Idle.png',
    frameMax: 10,
    scale: 3,
    offSet: {
        x: 215,
        y: 150
    },
    sprites: {
        idle: {
            imageSrc: './assets/1/Idle.png',
            frameMax: 10
        },
        run: {
            imageSrc: './assets/1/Run.png',
            frameMax: 8,
        },
        jump: {
            imageSrc: './assets/1/Jump.png',
            frameMax: 3,
        },
        fall: {
            imageSrc: './assets/1/Fall.png',
            frameMax: 3,
        },
        attack1: {
            imageSrc: './assets/1/Attack1.png',
            frameMax: 7,
        },
        idle_invertido: {
            imageSrc: './assets/1/Idle_invertido.png',
            frameMax: 10
        },
        run_invertido: {
            imageSrc: './assets/1/Run_invertido.png',
            frameMax: 8,
        },
        jump_invertido: {
            imageSrc: './assets/1/Jump_invertido.png',
            frameMax: 3,
        },
        fall_invertido: {
            imageSrc: './assets/1/Fall_invertido.png',
            frameMax: 3,
        },
        attack1_invertido: {
            imageSrc: './assets/1/Attack1_invertido.png',
            frameMax: 7,
        },
        takeHit: {
            imageSrc: './assets/1/Takehit.png',
            frameMax: 3,
        },
        takeHit_invertido: {
            imageSrc: './assets/1/TakeHit_invertido.png',
            frameMax: 3,
        },
        death: {
            imageSrc: './assets/1/Death.png',
            frameMax: 7,
        },
        death_invertido: {
            imageSrc: './assets/1/Death_invertido.png',
            frameMax: 7,
        },
        attack2: {
            imageSrc: './assets/1/Attack3.png',
            frameMax: 8,
        }
    },
    attackBox: {
        offSet: {
            x: 100,
            y: -1
        },
        width: 110,
        height: 150
    }
});

export function selectedSpritePlayer() {
    return player
}