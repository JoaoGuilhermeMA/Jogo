import { Fighter } from '../Fighter.js'
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

// const player = new Fighter({
//     position: {
//         x: 300,
//         y: 0
//     },
//     velocity: {
//         x: 0,
//         y: 0
//     },
//     ctx: c,
//     offSet: {
//         x: 0,
//         y: 0
//     },
//     imageSrc: './assets/1/Idle.png',
//     frameMax: 10,
//     scale: 3,
//     offSet: {
//         x: 215, // 215
//         y: 150
//     },
//     sprites: {
//         idle: {
//             imageSrc: './assets/1/Idle.png',
//             frameMax: 10,
//             invertida: false
//         },
//         run: {
//             imageSrc: './assets/1/Run.png',
//             frameMax: 8,
//             invertida: false
//         },
//         jump: {
//             imageSrc: './assets/1/Jump.png',
//             frameMax: 3,
//             invertida: false
//         },
//         fall: {
//             imageSrc: './assets/1/Fall.png',
//             frameMax: 3,
//             invertida: false
//         },
//         attack1: {
//             imageSrc: './assets/1/Attack1.png',
//             frameMax: 7,
//             invertida: false,
//             area: {
//                 width: 130,
//                 height: 150
//             }
//         },
//         idle_invertido: {
//             imageSrc: './assets/1/Idle.png',
//             frameMax: 10,
//             invertida: true
//         },
//         run_invertido: {
//             imageSrc: './assets/1/Run.png',
//             frameMax: 8,
//             invertida: true
//         },
//         jump_invertido: {
//             imageSrc: './assets/1/Jump.png',
//             frameMax: 3,
//             invertida: true
//         },
//         fall_invertido: {
//             imageSrc: './assets/1/Fall.png',
//             frameMax: 3,
//             invertida: true
//         },
//         attack1_invertido: {
//             imageSrc: './assets/1/Attack1.png',
//             frameMax: 7,
//             invertida: true,
//             area: {
//                 width: 117,
//                 height: 150
//             }
//         },
//         takeHit: {
//             imageSrc: './assets/1/Takehit.png',
//             frameMax: 3,
//             invertida: false
//         },
//         takeHit_invertido: {
//             imageSrc: './assets/1/TakeHit.png',
//             frameMax: 3,
//             invertida: true
//         },
//         death: {
//             imageSrc: './assets/1/Death.png',
//             frameMax: 7,
//             invertida: false
//         },
//         death_invertido: {
//             imageSrc: './assets/1/Death.png',
//             frameMax: 7,
//             invertida: true
//         },
//         attack2: {
//             imageSrc: './assets/1/Attack3.png',
//             frameMax: 8,
//             invertida: false,
//             area: {
//                 width: 150,
//                 height: 150
//             },
//         },
//         attack2_invertido: {
//             imageSrc: './assets/1/Attack3.png',
//             frameMax: 8,
//             invertida: true,
//             area: {
//                 width: 135,
//                 height: 150
//             }
//         }
//     },
//     attackBox: {
//         offSet: {
//             x: 100,
//             y: -1
//         },
//         width: 0,
//         height: 150
//     }
// });

// const rei = new Fighter({
//     position: {
//         x: 300,
//         y: 0
//     },
//     velocity: {
//         x: 0,
//         y: 0
//     },
//     ctx: c,
//     offSet: {
//         x: 0,
//         y: 0
//     },
//     imageSrc: './assets/4/Idle.png',
//     frameMax: 6,
//     scale: 2,
//     offSet: {
//         x: 100, // 215 // 400
//         y: 78 // 220
//     },
//     sprites: {
//         idle: {
//             imageSrc: './assets/4/Idle.png',
//             frameMax: 6,
//             invertida: false
//         },
//         run: {
//             imageSrc: './assets/4/Run.png',
//             frameMax: 8,
//             invertida: false
//         },
//         jump: {
//             imageSrc: './assets/4/Jump.png',
//             frameMax: 2,
//             invertida: false
//         },
//         fall: {
//             imageSrc: './assets/4/Fall.png',
//             frameMax: 2,
//             invertida: false
//         },
//         attack1: {
//             imageSrc: './assets/4/Attack1.png',
//             frameMax: 6,
//             invertida: false,
//             area: {
//                 width: 130,
//                 height: 150
//             }
//         },
//         idle_invertido: {
//             imageSrc: './assets/4/Idle.png',
//             frameMax: 6,
//             invertida: true
//         },
//         run_invertido: {
//             imageSrc: './assets/4/Run.png',
//             frameMax: 8,
//             invertida: true
//         },
//         jump_invertido: {
//             imageSrc: './assets/4/Jump.png',
//             frameMax: 2,
//             invertida: true
//         },
//         fall_invertido: {
//             imageSrc: './assets/4/Fall.png',
//             frameMax: 2,
//             invertida: true
//         },
//         attack1_invertido: {
//             imageSrc: './assets/4/Attack1.png',
//             frameMax: 6,
//             invertida: true,
//             area: {
//                 width: 117,
//                 height: 150
//             }
//         },
//         takeHit: {
//             imageSrc: './assets/4/Takehit.png',
//             frameMax: 4,
//             invertida: false
//         },
//         takeHit_invertido: {
//             imageSrc: './assets/4/TakeHit.png',
//             frameMax: 4,
//             invertida: true
//         },
//         death: {
//             imageSrc: './assets/4/Death.png',
//             frameMax: 11,
//             invertida: false
//         },
//         death_invertido: {
//             imageSrc: './assets/4/Death.png',
//             frameMax: 11,
//             invertida: true
//         },
//         attack2: {
//             imageSrc: './assets/4/Attack2.png',
//             frameMax: 6,
//             invertida: false,
//             area: {
//                 width: 150,
//                 height: 150
//             },
//         },
//         attack2_invertido: {
//             imageSrc: './assets/4/Attack2.png',
//             frameMax: 6,
//             invertida: true,
//             area: {
//                 width: 135,
//                 height: 150
//             }
//         }
//     },
//     attackBox: {
//         offSet: {
//             x: 100,
//             y: -1
//         },
//         width: 0,
//         height: 150
//     },
//     positionOnInvert: -50
// });

const fogo = new Fighter({
    position: {
        x: 300,
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
    imageSrc: './assets/5/Idle.png',
    frameMax: 8,
    scale: 2,
    offSet: {
        x: 266, // 215 // 400
        y: 100 // 220
    },
    sprites: {
        idle: {
            imageSrc: './assets/5/Idle.png',
            frameMax: 8,
            invertida: false
        },
        run: {
            imageSrc: './assets/5/Run.png',
            frameMax: 8,
            invertida: false
        },
        jump: {
            imageSrc: './assets/5/Jump.png',
            frameMax: 3,
            invertida: false
        },
        fall: {
            imageSrc: './assets/5/Fall.png',
            frameMax: 3,
            invertida: false
        },
        attack1: {
            imageSrc: './assets/5/Attack1.png',
            frameMax: 11,
            invertida: false,
            area: {
                width: 130,
                height: 150
            }
        },
        idle_invertido: {
            imageSrc: './assets/5/Idle.png',
            frameMax: 8,
            invertida: true
        },
        run_invertido: {
            imageSrc: './assets/5/Run.png',
            frameMax: 8,
            invertida: true
        },
        jump_invertido: {
            imageSrc: './assets/5/Jump.png',
            frameMax: 3,
            invertida: true
        },
        fall_invertido: {
            imageSrc: './assets/5/Fall.png',
            frameMax: 3,
            invertida: true
        },
        attack1_invertido: {
            imageSrc: './assets/5/Attack1.png',
            frameMax: 11,
            invertida: true,
            area: {
                width: 117,
                height: 150
            }
        },
        takeHit: {
            imageSrc: './assets/5/Takehit.png',
            frameMax: 6,
            invertida: false
        },
        takeHit_invertido: {
            imageSrc: './assets/5/TakeHit.png',
            frameMax: 6,
            invertida: true
        },
        death: {
            imageSrc: './assets/5/Death.png',
            frameMax: 13,
            invertida: false
        },
        death_invertido: {
            imageSrc: './assets/5/Death.png',
            frameMax: 13,
            invertida: true
        },
        attack2: {
            imageSrc: './assets/5/Attack2.png',
            frameMax: 18,
            invertida: false,
            area: {
                width: 150,
                height: 150
            },
        },
        attack2_invertido: {
            imageSrc: './assets/5/Attack2.png',
            frameMax: 18,
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
    },
    positionOnInvert: -50
});

export function selectedSpriteA() {
    return fogo
}