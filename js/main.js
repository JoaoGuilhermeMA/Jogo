import { keydownFunction, keyupFunction, getKey } from "./keys.js";
import { colisionPlayer, colisionEnemy } from './sprites/colision.js'
import { selectedSpritePlayer } from './sprites/player/generatePlayer.js'
import { selectedSpriteEnemy } from './sprites/enemy/generateEnemy.js'
import { spriteBackground, spriteBird } from './sprites/generateSprites.js'
import { playerMovement, jumpingPlayer, ifPlayerMisses } from './sprites/player/movementPlayer.js'
import { checkVision } from './vision.js'
import { jumpingEnemy, movementEnemy, ifEnemyMisses } from './sprites/enemy/movementEnemy.js'
import {updateHealthEnemy, updateHealthPlayer} from './healthBar.js'

let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

canvas.width = 1684
canvas.height = 780

const background = spriteBackground();
const bird = spriteBird();
const player = selectedSpritePlayer()
const enemy = selectedSpriteEnemy();

updateHealthEnemy(enemy);
updateHealthPlayer(player);

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

    checkVision(player, enemy);
    playerMovement(player);
    jumpingPlayer(player);

    jumpingEnemy(enemy);
    movementEnemy(enemy);

    colisionPlayer({ rectangule1: player, rectangule2: enemy });
    ifPlayerMisses(player)

    colisionEnemy({ rectangule1: player, rectangule2: enemy });
    ifEnemyMisses(enemy);
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
