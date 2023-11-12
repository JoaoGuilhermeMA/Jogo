import { Sprite } from "./Sprite.js";

let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

const progressFill = document.getElementById("vidaFill");
const progresspcFill = document.getElementById("vidaPcFill");

let progress = 100;
let progresspc = 100;
progressFill.style.width = `${progress}%`;
progresspcFill.style.width = `${progresspc}%`;

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height);

const player = new Sprite({
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
    }
});

const enemy = new Sprite({
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

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    }
}

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
    player.update();
    enemy.update();

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // check vision
    if (player.position.x + player.width > enemy.position.x + enemy.width) {
        player.attackBox.offSet.x = -50;
        enemy.attackBox.offSet.x = 0;
    }else {
        player.attackBox.offSet.x = 0;
        enemy.attackBox.offSet.x = -50;
    }

    // player movement
    if (keys.a.pressed && (player.lastKey === 'a' || !keys.d.pressed)) {
        player.velocity.x = -5
    } else if (keys.d.pressed && (player.lastKey === 'd' || !keys.a.pressed)) {
        player.velocity.x = 5
    }

    // enemy movement
    if (keys.ArrowLeft.pressed && (enemy.lastKey === 'ArrowLeft' || !keys.ArrowRight.pressed)) {
        enemy.velocity.x = -5
    } else if (keys.ArrowRight.pressed && (enemy.lastKey === 'ArrowRight' || !keys.ArrowLeft.pressed)) {
        enemy.velocity.x = 5
    }

    // detect for collision for player
    if (rectangularCollision({ rectangule1: player, rectangule2: enemy }) && player.isAttacking) {
        player.isAttacking = false;
        console.log(progress);
        console.log('player attack');
        progress -= 10;
        progressFill.style.width = `${progress}%`;
    }
    // detect for collision for enemy
    if (rectangularCollision({ rectangule1: enemy, rectangule2: player }) && enemy.isAttacking) {
        enemy.isAttacking = false;
        console.log('enemy attack');
        progresspc -= 10;
        progresspcFill.style.width = `${progresspc}%`;
    }
}

animate();

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true;
            player.lastKey = 'd'
            break;
        case 'a':
            keys.a.pressed = true;
            player.lastKey = 'a'
            break;
        case 'w':
            player.velocity.y = -20;
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            enemy.lastKey = 'ArrowRight'
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            enemy.lastKey = 'ArrowLeft'
            break;
        case 'ArrowUp':
            enemy.velocity.y = -20;
            break
        case ' ':
            player.attack();
            break;
        case '0':
            enemy.attack();
            break;
        default:
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break
    }
    // enemy keys
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break
    }
});