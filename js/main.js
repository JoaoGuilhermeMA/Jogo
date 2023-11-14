import { Sprite } from "./Sprite.js";
import { keydownFunction, keyupFunction, getKey } from "./keys.js";
import { checkColision } from './colision.js'
import { Fighter } from './Fighter.js'

let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

const progressFill = document.getElementById("vidaCorJogador");
const progresspcFill = document.getElementById("vidaCorPC");


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

progressFill.style.width = `${player.health}%`;
progresspcFill.style.width = `${enemy.health}%`;


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
    // console.log(player);
    // console.log(enemy);

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // // check vision
    if (player.position.x + player.width > enemy.position.x + enemy.width) {
        player.infront = false;
        enemy.infront = true;
        player.attackBox.offSet.x = -140;
        player.attackBox.width = 139;
        enemy.attackBox.width = 136;
        enemy.attackBox.offSet.x = 100;
    } else {
        player.infront = true;
        enemy.infront = false;
        player.attackBox.offSet.x = 50;
        player.attackBox.width = 130;
        enemy.attackBox.offSet.x = -136;
    }


    // player movement
    if (getKey('a') && (player.lastKey === 'a' || !getKey('d'))) {
        player.velocity.x = -5;
        if (player.infront) {
            player.switchSprites('run');
        } else {
            player.switchSprites('run_invertido');
        }
    } else if (getKey('d') && (player.lastKey === 'd' || !getKey('a'))) {
        player.velocity.x = 5
        if (player.infront) {
            player.switchSprites('run');
        } else {
            player.switchSprites('run_invertido');
        }
    } else {
        if (player.infront) {
            player.switchSprites('idle');
        } else {
            player.switchSprites('idle_invertido');
        }
    }

    // jumping player
    if (player.velocity.y < 0) {
        if (player.infront) {
            player.switchSprites('jump');
        } else {
            player.switchSprites('jump_invertido');
        }
    } else if (player.velocity.y > 0) {
        if (player.infront) {
            player.switchSprites('fall');
        } else {
            player.switchSprites('fall_invertido');
        }
    }

    // enemy movement
    if (getKey('ArrowLeft') && (enemy.lastKey === 'ArrowLeft' || !getKey('ArrowRight'))) {
        enemy.velocity.x = -5
        if (enemy.infront) {
            enemy.switchSprites('run');
        } else {
            enemy.switchSprites('run_invertido');
        }
    } else if (getKey('ArrowRight') && (enemy.lastKey === 'ArrowRight' || !getKey('ArrowLeft'))) {
        enemy.velocity.x = 5
        if (enemy.infront) {
            enemy.switchSprites('run');
        } else {
            enemy.switchSprites('run_invertido');
        }
    } else {
        if (enemy.infront) {
            enemy.switchSprites('idle');
        } else {
            enemy.switchSprites('idle_invertido');
        }
    }

    // jumping enemy
    if (enemy.velocity.y < 0) {
        if (enemy.infront) {
            enemy.switchSprites('jump');
        } else {
            enemy.switchSprites('jump_invertido');
        }
    } else if (enemy.velocity.y > 0) {
        if (enemy.infront) {
            enemy.switchSprites('fall');
        } else {
            enemy.switchSprites('fall_invertido');
        }
    }

    // detect for collision for player and enemy gets hit
    if (rectangularCollision({ rectangule1: player, rectangule2: enemy }) && player.isAttacking && player.frameCurrent === 4) {
        enemy.takeHit();
        player.isAttacking = false;
        progresspcFill.style.width = `${enemy.health}%`;
    }

    // if player misses
    if (player.isAttacking && player.frameCurrent === 4) {
        player.isAttacking = false;
    }

    // detect for collision for enemy
    if (rectangularCollision({ rectangule1: enemy, rectangule2: player }) && enemy.isAttacking && enemy.frameCurrent === 4) {
        enemy.isAttacking = false;
        player.takeHit();
        progressFill.style.width = `${player.health}%`;
    }

    // if enemy misses 
    if (enemy.isAttacking && enemy.frameCurrent === 4) {
        enemy.isAttacking = false;
    }
}

animate();

window.addEventListener('keydown', (event) => {
    keydownFunction(event, player, enemy);
});

window.addEventListener('keyup', (event) => {
    keyupFunction(event);
});