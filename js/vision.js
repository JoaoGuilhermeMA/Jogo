export function checkVision(player, enemy) {
    if (player.position.x + player.width > enemy.position.x + enemy.width) {
        player.infront = false;
        enemy.infront = true;
        enemy.attackBox.offSet.x = 100;
    } else {
        player.infront = true;
        enemy.infront = false;
        player.attackBox.offSet.x = 50;
        // enemy.attackBox.offSet.x = -136;
    } 
}
