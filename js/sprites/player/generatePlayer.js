import { Fighter } from '../../Fighter.js'
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
            frameMax: 10,
            invertida: false
        },
        run: {
            imageSrc: './assets/1/Run.png',
            frameMax: 8,
            invertida: false
        },
        jump: {
            imageSrc: './assets/1/Jump.png',
            frameMax: 3,
            invertida: false
        },
        fall: {
            imageSrc: './assets/1/Fall.png',
            frameMax: 3,
            invertida: false
        },
        attack1: {
            imageSrc: './assets/1/Attack1.png',
            frameMax: 7,
            invertida: false
        },
        idle_invertido: {
            imageSrc: './assets/1/Idle_invertido.png',
            frameMax: 10,
            invertida: true
        },
        run_invertido: {
            imageSrc: './assets/1/Run_invertido.png',
            frameMax: 8,
            invertida: true
        },
        jump_invertido: {
            imageSrc: './assets/1/Jump_invertido.png',
            frameMax: 3,
            invertida: true
        },
        fall_invertido: {
            imageSrc: './assets/1/Fall_invertido.png',
            frameMax: 3,
            invertida: true
        },
        attack1_invertido: {
            imageSrc: './assets/1/Attack1_invertido.png',
            frameMax: 7,
            invertida: true
        },
        takeHit: {
            imageSrc: './assets/1/Takehit.png',
            frameMax: 3,
            invertida: false
        },
        takeHit_invertido: {
            imageSrc: './assets/1/TakeHit_invertido.png',
            frameMax: 3,
            invertida: true
        },
        death: {
            imageSrc: './assets/1/Death.png',
            frameMax: 7,
            invertida: false
        },
        death_invertido: {
            imageSrc: './assets/1/Death_invertido.png',
            frameMax: 7,
            invertida: true
        },
        attack2: {
            imageSrc: './assets/1/Attack3.png',
            frameMax: 8,
            invertida: false
        },
        attack2_invertido: {
            imageSrc: './assets/1/Attack3_invertido.png',
            frameMax: 9,
            invertida: true
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