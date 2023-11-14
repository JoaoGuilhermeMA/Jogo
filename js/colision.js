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