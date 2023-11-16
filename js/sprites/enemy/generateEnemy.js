import { Fighter } from '../../Fighter.js'
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

// const enemy = new Fighter({
//     position: {
//         x: 400,
//         y: 100
//     },
//     width: 100,
//     velocity: {
//         x: 0,
//         y: 0
//     },
//     ctx: c,
//     offSet: {
//         x: -50,
//         y: 0
//     },
//     imageSrc: './assets/2/Idle.png',
//     frameMax: 10,
//     scale: 3,
//     offSet: {
//         x: 150, // 215
//         y: 95   // 95
//     },
//     sprites: {
//         idle: {
//             imageSrc: './assets/2/Idle.png',
//             frameMax: 10,
//             invertida: false
//         },
//         run: {
//             imageSrc: './assets/2/Run.png',
//             frameMax: 8,
//             invertida: false
//         },
//         jump: {
//             imageSrc: './assets/2/Jump.png',
//             frameMax: 3,
//             invertida: false
//         },
//         fall: {
//             imageSrc: './assets/2/Fall.png',
//             frameMax: 3,
//             invertida: false
//         },
//         attack1: {
//             imageSrc: './assets/2/Attack1.png',
//             frameMax: 7,
//             invertida: false,
//             area: {
//                 width: 125,
//                 height: 140
//             }
//         },
//         idle_invertido: {
//             imageSrc: './assets/2/Idle.png',
//             frameMax: 10,
//             invertida: true
//         },
//         run_invertido: {
//             imageSrc: './assets/2/Run.png',
//             frameMax: 8,
//             invertida: true
//         },
//         jump_invertido: {
//             imageSrc: './assets/2/Jump.png',
//             frameMax: 3,
//             invertida: true
//         },
//         fall_invertido: {
//             imageSrc: './assets/2/Fall.png',
//             frameMax: 3,
//             invertida: true
//         },
//         attack1_invertido: {
//             imageSrc: './assets/2/Attack1.png',
//             frameMax: 7,
//             invertida: true,
//             area: {
//                 width: 124,
//                 height: 200
//             }
//         },
//         takeHit: {
//             imageSrc: './assets/2/Takehit.png',
//             frameMax: 3,
//             invertida: false
//         },
//         takeHit_invertido: {
//             imageSrc: './assets/2/TakeHit.png',
//             frameMax: 3,
//             invertida: true
//         },
//         death: {
//             imageSrc: './assets/2/Death.png',
//             frameMax: 11,
//             invertida: false
//         },
//         death_invertido: {
//             imageSrc: './assets/2/Death.png',
//             frameMax: 11,
//             invertida: true
//         },
//         attack2: {
//             imageSrc: './assets/2/Attack3.png',
//             frameMax: 9,
//             invertida: false,
//             area: {
//                 width: 125,
//                 height: 150
//             }
//         },
//         attack2_invertido: {
//             imageSrc: './assets/2/Attack3.png',
//             frameMax: 9,
//             invertida: true,
//             area: {
//                 width: 126,
//                 height: 150
//             }
//         }
//     },
//     attackBox: {
//         offSet: {
//             x: -300,
//             y: -50
//         },
//         width: 140,
//         height: 200
//     },
//     positionOnInvert: -100
// });


const player = new Fighter({
    position: {
        x: 500,
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
        x: 215, // 215
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
            invertida: false,
            area: {
                width: 130,
                height: 150
            }
        },
        idle_invertido: {
            imageSrc: './assets/1/Idle.png',
            frameMax: 10,
            invertida: true
        },
        run_invertido: {
            imageSrc: './assets/1/Run.png',
            frameMax: 8,
            invertida: true
        },
        jump_invertido: {
            imageSrc: './assets/1/Jump.png',
            frameMax: 3,
            invertida: true
        },
        fall_invertido: {
            imageSrc: './assets/1/Fall.png',
            frameMax: 3,
            invertida: true
        },
        attack1_invertido: {
            imageSrc: './assets/1/Attack1.png',
            frameMax: 7,
            invertida: true,
            area: {
                width: 117,
                height: 150
            }
        },
        takeHit: {
            imageSrc: './assets/1/Takehit.png',
            frameMax: 3,
            invertida: false
        },
        takeHit_invertido: {
            imageSrc: './assets/1/TakeHit.png',
            frameMax: 3,
            invertida: true
        },
        death: {
            imageSrc: './assets/1/Death.png',
            frameMax: 7,
            invertida: false
        },
        death_invertido: {
            imageSrc: './assets/1/Death.png',
            frameMax: 7,
            invertida: true
        },
        attack2: {
            imageSrc: './assets/1/Attack3.png',
            frameMax: 8,
            invertida: false,
            area: {
                width: 150,
                height: 150
            },
        },
        attack2_invertido: {
            imageSrc: './assets/1/Attack3.png',
            frameMax: 8,
            invertida: true,
            area: {
                width: 135,
                height: 150
            }
        }
    },
    attackBox: {
        offSet: {
            x: 100,
            y: -1
        },
        width: 0,
        height: 150
    }
});

export function selectedSpriteEnemy() {
    return player
}