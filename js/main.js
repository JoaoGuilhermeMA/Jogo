import { Sprite } from "./Sprite.js";
import { keydownFunction, keyupFunction, getKey } from "./keys.js";
import { checkColision } from './colision.js'
import { Fighter } from './Fighter.js'

let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

const progressFill = document.getElementById("vidaCorJogador");
const progresspcFill = document.getElementById("vidaCorPC");

let progress = 100;
let progresspc = 100;
progressFill.style.width = `${progress}%`;
progresspcFill.style.width = `${progresspc}%`;

canvas.width = 1684
canvas.height = 780

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
let caminhoPlayer = './assets/1/Idle.png'
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
    imageSrc: caminhoPlayer,
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
        }
    }
});

const enemy = new Fighter({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'blue',
    ctx: c,
    offSet: {
        x: -50,
        y: 0
    },
    imageSrc: './assets/2/Idle_invertido.png',
    frameMax: 10,
    scale: 3,
    offSet: {
        x: 215,
        y: 95
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
        }
    }
});

function rectangularCollision({ rectangule1, rectangule2 }) {
    return (
        rectangule1.attackBox.position.x + rectangule1.attackBox.width >= rectangule2.position.x
        && rectangule1.attackBox.position.x <= rectangule2.position.x + rectangule2.width
        && rectangule1.attackBox.position.y + rectangule1.attackBox.height >= rectangule2.position.y
        && rectangule1.attackBox.position.y <= rectangule2.position.y + rectangule2.height
    )
}

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height);
    background.update();
    bird.update();
    player.update();
    enemy.update();

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // check vision
    if (player.position.x + player.width > enemy.position.x + enemy.width) {
        player.attackBox.offSet.x = -50;
        enemy.attackBox.offSet.x = 0;
    } else {
        player.attackBox.offSet.x = 0;
        enemy.attackBox.offSet.x = -50;
    }


    // player movement
    if (getKey('a') && (player.lastKey === 'a' || !getKey('d'))) {
        player.velocity.x = -5;
        if (player.attackBox.offSet.x === -50) {
            player.switchSprites('run_invertido');
        } else {
            player.switchSprites('run');
        }
    } else if (getKey('d') && (player.lastKey === 'd' || !getKey('a'))) {
        player.velocity.x = 5
        if (player.attackBox.offSet.x === -50) {
            player.switchSprites('run_invertido');
        } else {
            player.switchSprites('run');
        }
    } else {
        if (player.attackBox.offSet.x === -50) {
            player.switchSprites('idle_invertido');
        } else {
            player.switchSprites('idle');
        }
    }

    // jumping player
    if (player.velocity.y < 0) {
        if (player.attackBox.offSet.x === -50) {
            player.switchSprites('jump_invertido');
        } else {
            player.switchSprites('jump');
        }
    } else if (player.velocity.y > 0) {
        if (player.attackBox.offSet.x === -50) {
            player.switchSprites('fall_invertido');
        } else {
            player.switchSprites('fall');
        }
    }

    // enemy movement
    if (getKey('ArrowLeft') && (enemy.lastKey === 'ArrowLeft' || !getKey('ArrowRight'))) {
        enemy.velocity.x = -5
        if (enemy.attackBox.offSet.x === -50) {
            enemy.switchSprites('run_invertido');
            console.log("oi");
        } else {
            enemy.switchSprites('run');
            console.log("oiads");
        }
    } else if (getKey('ArrowRight') && (enemy.lastKey === 'ArrowRight' || !getKey('ArrowLeft'))) {
        enemy.velocity.x = 5
        if (enemy.attackBox.offSet.x === -50) {
            enemy.switchSprites('run_invertido');
            console.log("oi");
        } else {
            enemy.switchSprites('run');
            console.log("oiads");
        }
    } else {
        if (enemy.attackBox.offSet.x === -50) {
            enemy.switchSprites('idle_invertido');
        } else {
            enemy.switchSprites('idle');
        }
    }

    // jumping enemy
    if (enemy.velocity.y < 0) {
        if (enemy.attackBox.offSet.x === -50) {
            enemy.switchSprites('jump_invertido');
        } else {
            enemy.switchSprites('jump');
        }
    } else if (enemy.velocity.y > 0) {
        if (enemy.attackBox.offSet.x === -50) {
            enemy.switchSprites('fall_invertido');
        } else {
            enemy.switchSprites('fall');
        }
    }

    // detect for collision for player
    if (rectangularCollision({ rectangule1: player, rectangule2: enemy }) && player.isAttacking) {
        player.isAttacking = false;
        console.log(progress);
        console.log('player attack');
        progresspcFill.style.width = `${progresspc}%`;
        progresspc -= 10;
    }
    // detect for collision for enemy
    if (rectangularCollision({ rectangule1: enemy, rectangule2: player }) && enemy.isAttacking) {
        enemy.isAttacking = false;
        console.log('enemy attack');
        progress -= 10;
        progressFill.style.width = `${progress}%`;
    }
}

animate();

window.addEventListener('keydown', (event) => {
    keydownFunction(event, player, enemy);
});

window.addEventListener('keyup', (event) => {
    keyupFunction(event);
});