const progressFill = document.getElementById("vidaCorJogador");
const progresspcFill = document.getElementById("vidaCorPC");

export function updateHealthPlayer(player) {
    progressFill.style.width = `${player.health}%`;
}

export function updateHealthEnemy(enemy) {
    progresspcFill.style.width = `${enemy.health}%`;
}