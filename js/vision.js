export function checkVision(player, enemy) {
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
}
