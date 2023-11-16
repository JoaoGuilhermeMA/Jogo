import { Fighter } from '../../Fighter.js'
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

const raio = new Fighter({
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

const chines = new Fighter({
    position: {
        x: 500,
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
    imageSrc: './assets/2/Idle.png',
    frameMax: 10,
    scale: 3,
    offSet: {
        x: 150, // 215
        y: 95   // 95
    },
    sprites: {
        idle: {
            imageSrc: './assets/2/Idle.png',
            frameMax: 10,
            invertida: false
        },
        run: {
            imageSrc: './assets/2/Run.png',
            frameMax: 8,
            invertida: false
        },
        jump: {
            imageSrc: './assets/2/Jump.png',
            frameMax: 3,
            invertida: false
        },
        fall: {
            imageSrc: './assets/2/Fall.png',
            frameMax: 3,
            invertida: false
        },
        attack1: {
            imageSrc: './assets/2/Attack1.png',
            frameMax: 7,
            invertida: false,
            area: {
                width: 125,
                height: 140
            }
        },
        idle_invertido: {
            imageSrc: './assets/2/Idle.png',
            frameMax: 10,
            invertida: true
        },
        run_invertido: {
            imageSrc: './assets/2/Run.png',
            frameMax: 8,
            invertida: true
        },
        jump_invertido: {
            imageSrc: './assets/2/Jump.png',
            frameMax: 3,
            invertida: true
        },
        fall_invertido: {
            imageSrc: './assets/2/Fall.png',
            frameMax: 3,
            invertida: true
        },
        attack1_invertido: {
            imageSrc: './assets/2/Attack1.png',
            frameMax: 7,
            invertida: true,
            area: {
                width: 124,
                height: 200
            }
        },
        takeHit: {
            imageSrc: './assets/2/Takehit.png',
            frameMax: 3,
            invertida: false
        },
        takeHit_invertido: {
            imageSrc: './assets/2/TakeHit.png',
            frameMax: 3,
            invertida: true
        },
        death: {
            imageSrc: './assets/2/Death.png',
            frameMax: 11,
            invertida: false
        },
        death_invertido: {
            imageSrc: './assets/2/Death.png',
            frameMax: 11,
            invertida: true
        },
        attack2: {
            imageSrc: './assets/2/Attack3.png',
            frameMax: 9,
            invertida: false,
            area: {
                width: 125,
                height: 150
            }
        },
        attack2_invertido: {
            imageSrc: './assets/2/Attack3.png',
            frameMax: 9,
            invertida: true,
            area: {
                width: 126,
                height: 150
            }
        }
    },
    attackBox: {
        offSet: {
            x: -300,
            y: -50
        },
        width: 140,
        height: 200
    },
    positionOnInvert: -100
});

const rei = new Fighter({
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
    imageSrc: './assets/4/Idle.png',
    frameMax: 6,
    scale: 2,
    offSet: {
        x: 100, // 215 // 400
        y: 78 // 220
    },
    sprites: {
        idle: {
            imageSrc: './assets/4/Idle.png',
            frameMax: 6,
            invertida: false
        },
        run: {
            imageSrc: './assets/4/Run.png',
            frameMax: 8,
            invertida: false
        },
        jump: {
            imageSrc: './assets/4/Jump.png',
            frameMax: 2,
            invertida: false
        },
        fall: {
            imageSrc: './assets/4/Fall.png',
            frameMax: 2,
            invertida: false
        },
        attack1: {
            imageSrc: './assets/4/Attack1.png',
            frameMax: 6,
            invertida: false,
            area: {
                width: 140,
                height: 150
            }
        },
        idle_invertido: {
            imageSrc: './assets/4/Idle.png',
            frameMax: 6,
            invertida: true
        },
        run_invertido: {
            imageSrc: './assets/4/Run.png',
            frameMax: 8,
            invertida: true
        },
        jump_invertido: {
            imageSrc: './assets/4/Jump.png',
            frameMax: 2,
            invertida: true
        },
        fall_invertido: {
            imageSrc: './assets/4/Fall.png',
            frameMax: 2,
            invertida: true
        },
        attack1_invertido: {
            imageSrc: './assets/4/Attack1.png',
            frameMax: 6,
            invertida: true,
            area: {
                width: 140,
                height: 150
            }
        },
        takeHit: {
            imageSrc: './assets/4/Takehit.png',
            frameMax: 4,
            invertida: false
        },
        takeHit_invertido: {
            imageSrc: './assets/4/TakeHit.png',
            frameMax: 4,
            invertida: true
        },
        death: {
            imageSrc: './assets/4/Death.png',
            frameMax: 11,
            invertida: false
        },
        death_invertido: {
            imageSrc: './assets/4/Death.png',
            frameMax: 11,
            invertida: true
        },
        attack2: {
            imageSrc: './assets/4/Attack2.png',
            frameMax: 6,
            invertida: false,
            area: {
                width: 156,
                height: 150
            },
        },
        attack2_invertido: {
            imageSrc: './assets/4/Attack2.png',
            frameMax: 6,
            invertida: true,
            area: {
                width: 156,
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

const fogo = new Fighter({
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
                width: 107,
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
                width: 107,
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
                width: 170,
                height: 150
            },
        },
        attack2_invertido: {
            imageSrc: './assets/5/Attack2.png',
            frameMax: 18,
            invertida: true,
            area: {
                width: 170,
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

const roxa = new Fighter({
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
    imageSrc: './assets/6/Idle.png',
    frameMax: 4,
    scale: 2,
    offSet: {
        x: 80, // 215 // 400
        y: -20 // 220
    },
    sprites: {
        idle: {
            imageSrc: './assets/6/Idle.png',
            frameMax: 4,
            invertida: false
        },
        run: {
            imageSrc: './assets/6/Run.png',
            frameMax: 7,
            invertida: false
        },
        jump: {
            imageSrc: './assets/6/Jump.png',
            frameMax: 6,
            invertida: false
        },
        fall: {
            imageSrc: './assets/6/Fall.png',
            frameMax: 3,
            invertida: false
        },
        attack1: {
            imageSrc: './assets/6/Attack1.png',
            frameMax: 6,
            invertida: false,
            area: {
                width: 70,
                height: 150
            }
        },
        idle_invertido: {
            imageSrc: './assets/6/Idle.png',
            frameMax: 4,
            invertida: true
        },
        run_invertido: {
            imageSrc: './assets/6/Run.png',
            frameMax: 7,
            invertida: true
        },
        jump_invertido: {
            imageSrc: './assets/6/Jump.png',
            frameMax: 6,
            invertida: true
        },
        fall_invertido: {
            imageSrc: './assets/6/Fall.png',
            frameMax: 3,
            invertida: true
        },
        attack1_invertido: {
            imageSrc: './assets/6/Attack1.png',
            frameMax: 6,
            invertida: true,
            area: {
                width: 70,
                height: 150
            }
        },
        takeHit: {
            imageSrc: './assets/6/Takehit.png',
            frameMax: 4,
            invertida: false
        },
        takeHit_invertido: {
            imageSrc: './assets/6/TakeHit.png',
            frameMax: 4,
            invertida: true
        },
        death: {
            imageSrc: './assets/6/Death.png',
            frameMax: 5,
            invertida: false
        },
        death_invertido: {
            imageSrc: './assets/6/Death.png',
            frameMax: 5,
            invertida: true
        },
        attack2: {
            imageSrc: './assets/6/Attack2.png',
            frameMax: 6,
            invertida: false,
            area: {
                width: 70,
                height: 150
            },
        },
        attack2_invertido: {
            imageSrc: './assets/6/Attack2.png',
            frameMax: 6,
            invertida: true,
            area: {
                width: 70,
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

const metal = new Fighter({
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
    imageSrc: './assets/3/Idle.png',
    frameMax: 8,
    scale: 2.7,
    offSet: {
        x: 356, // 215 // 400
        y: 190 // 220
    },
    sprites: {
        idle: {
            imageSrc: './assets/3/Idle.png',
            frameMax: 8,
            invertida: false
        },
        run: {
            imageSrc: './assets/3/Run.png',
            frameMax: 8,
            invertida: false
        },
        jump: {
            imageSrc: './assets/3/Jump.png',
            frameMax: 3,
            invertida: false
        },
        fall: {
            imageSrc: './assets/3/Fall.png',
            frameMax: 3,
            invertida: false
        },
        attack1: {
            imageSrc: './assets/3/Attack1.png',
            frameMax: 6,
            invertida: false,
            area: {
                width: 113,
                height: 150
            }
        },
        idle_invertido: {
            imageSrc: './assets/3/Idle.png',
            frameMax: 8,
            invertida: true
        },
        run_invertido: {
            imageSrc: './assets/3/Run.png',
            frameMax: 8,
            invertida: true
        },
        jump_invertido: {
            imageSrc: './assets/3/Jump.png',
            frameMax: 3,
            invertida: true
        },
        fall_invertido: {
            imageSrc: './assets/3/Fall.png',
            frameMax: 3,
            invertida: true
        },
        attack1_invertido: {
            imageSrc: './assets/3/Attack1.png',
            frameMax: 6,
            invertida: true,
            area: {
                width: 113,
                height: 150
            }
        },
        takeHit: {
            imageSrc: './assets/3/Takehit.png',
            frameMax: 6,
            invertida: false
        },
        takeHit_invertido: {
            imageSrc: './assets/3/TakeHit.png',
            frameMax: 6,
            invertida: true
        },
        death: {
            imageSrc: './assets/3/Death.png',
            frameMax: 12,
            invertida: false
        },
        death_invertido: {
            imageSrc: './assets/3/Death.png',
            frameMax: 12,
            invertida: true
        },
        attack2: {
            imageSrc: './assets/3/Attack2.png',
            frameMax: 11,
            invertida: false,
            area: {
                width: 276,
                height: 150
            },
        },
        attack2_invertido: {
            imageSrc: './assets/3/Attack2.png',
            frameMax: 11,
            invertida: true,
            area: {
                width: 276,
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

const player2CharacterID = parseInt(localStorage.getItem('player2Character'));

export function selectedSpriteEnemy() {
    switch (player2CharacterID) {
        case 1:
            return raio
        case 2:
            return chines
        case 3:
            return metal
        case 4:
            return rei
        case 5:
            return fogo
        case 6:
            return roxa
        default:
            return roxa;
            break;
    }
}
