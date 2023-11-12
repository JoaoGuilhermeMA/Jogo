

export function checkColision(player, enemy) {
    if (player.position.x + player.width > enemy.position.x &&
        player.position.x < enemy.position.x + enemy.width &&
        player.position.y + player.height > enemy.position.y &&
        player.position.y < enemy.position.y + enemy.height) {
        return true;
    }
    return false;
}