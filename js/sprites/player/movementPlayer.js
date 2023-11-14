import { getKey } from "../../keys.js";

export function playerMovement(player) {
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
}

// jumping player
export function jumpingPlayer(player) {
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
}


export function ifPlayerMisses(player) {
    if (player.isAttacking && player.frameCurrent === 4) {
        player.isAttacking = false;
    }
}
