import { Sprite } from "./Sprite.js";
import { keydownFunction, keyupFunction, getKey } from "./keys.js";
import { checkColision } from './colision.js'
import { Fighter } from "./Fighter.js"

let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

const progressFill = document.getElementById("vidaCorJogador");
const progresspcFill = document.getElementById("vidaCorPC");

let progress = 100;
let progresspc = 100;
progressFill.style.width = `${progress}%`;
progresspcFill.style.width = `${progresspc}%`;

canvas.width = 1789
canvas.height = 789

c.fillRect(0, 0, canvas.width, canvas.height);

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    ctx: c,
    imageSrc: './assets/background.png'

});

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
    imageSrc: './assets/imagens/1/Idle.png',
    framesMax: 10,
    scale: 1.8,
    offset: {
        x: 56,
        y: 51
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
        player.velocity.x = -5
    } else if (getKey('d') && (player.lastKey === 'd' || !getKey('a'))) {
        player.velocity.x = 5
    }

    // enemy movement
    if (getKey('ArrowLeft') && (enemy.lastKey === 'ArrowLeft' || !getKey('ArrowRight'))) {
        enemy.velocity.x = -5
    } else if (getKey('ArrowRight') && (enemy.lastKey === 'ArrowRight' || !getKey('ArrowLeft'))) {
        enemy.velocity.x = 5
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