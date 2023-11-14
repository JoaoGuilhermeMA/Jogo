import { getKey } from "../../keys.js";

export function movementEnemy(enemy) {
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
}

export function jumpingEnemy(enemy) {
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
}

export function ifEnemyMisses(enemy) {
    if (enemy.isAttacking && enemy.frameCurrent === 4) {
        enemy.isAttacking = false;
    }
}