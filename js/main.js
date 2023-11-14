import { keydownFunction, keyupFunction, getKey } from "./keys.js";
import { rectangularCollision } from './colision.js'
import { selectedSpritePlayer } from './generatePlayer.js'
import { selectedSpriteEnemy } from './generateEnemy.js'
import { spriteBackground, spriteBird } from './generateSprites.js'

let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

const progressFill = document.getElementById("vidaCorJogador");
const progresspcFill = document.getElementById("vidaCorPC");


canvas.width = 1684
canvas.height = 780


const background = spriteBackground();
const bird = spriteBird();
const player = selectedSpritePlayer()
const enemy = selectedSpriteEnemy();


progressFill.style.width = `${player.health}%`;
progresspcFill.style.width = `${enemy.health}%`;

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

function kewdownFunctionThis(event) {
    if (player.dead || enemy.dead) {
        removeEventListener('keydown', kewdownFunctionThis);
    }
    keydownFunction(event, player, enemy);
}

function keyupFunctionThis(event) {
    if (player.dead || enemy.dead) {
        removeEventListener('keydown', keyupFunctionThis);
    }
    keyupFunction(event);
}
window.addEventListener('keydown', kewdownFunctionThis);

window.addEventListener('keyup', keyupFunctionThis);
