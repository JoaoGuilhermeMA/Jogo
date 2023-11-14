import {updateHealthEnemy, updateHealthPlayer} from '../healthBar.js'

export function checkColision(player, enemy) {
    if (player.position.x + player.width > enemy.position.x &&
        player.position.x < enemy.position.x + enemy.width &&
        player.position.y + player.height > enemy.position.y &&
        player.position.y < enemy.position.y + enemy.height) {
        return true;
    }
    return false;
}

export function rectangularCollision({ rectangule1, rectangule2 }) {
    return (
        rectangule1.attackBox.position.x + rectangule1.attackBox.width >= rectangule2.position.x
        && rectangule1.attackBox.position.x <= rectangule2.position.x + rectangule2.width
        && rectangule1.attackBox.position.y + rectangule1.attackBox.height >= rectangule2.position.y
        && rectangule1.attackBox.position.y <= rectangule2.position.y + rectangule2.height
    )
}

export function colisionPlayer({rectangule1: player, rectangule2: enemy}) {
    if (rectangularCollision({ rectangule1: player, rectangule2: enemy }) && player.isAttacking && player.frameCurrent === 4) {
        enemy.takeHit();
        player.isAttacking = false;
        updateHealthEnemy(enemy);
    }
}


// detect for collision for enemy
export function colisionEnemy({rectangule1: player, rectangule2: enemy}) {
    if (rectangularCollision({ rectangule1: player, rectangule2: enemy }) && enemy.isAttacking && enemy.frameCurrent === 4) {
        enemy.isAttacking = false;
        player.takeHit();
        updateHealthPlayer(player)
    }
}
