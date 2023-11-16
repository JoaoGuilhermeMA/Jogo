const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    }
}

export function getKey(key) {
    if (keys.hasOwnProperty(key)) {
        return keys[key].pressed;
    } else {
        console.error(`A tecla '${key}' não está definida.`);
        return undefined;
    }
}

export function keydownFunction(event, player, enemy) {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true;
            player.lastKey = 'd'
            break;
        case 'a':
            keys.a.pressed = true;
            player.lastKey = 'a'
            break;
        case 'w':
            if (player.inFloor) {
                player.velocity.y = -20;
                player.inFloor = false;
            }
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            enemy.lastKey = 'ArrowRight'
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            enemy.lastKey = 'ArrowLeft'
            break;
        case 'ArrowUp':
            if (enemy.inFloor) {
                enemy.velocity.y = -20;
                enemy.inFloor = false;
            }
            break
        case ' ':
            player.attack(' ');
            break;
        case 'e':
            player.attack('e');
            break;
        case '0':
            enemy.attack('0');
            break;
        case 'ArrowDown':
            enemy.attack('ArrowDown');
            break;
        case 'j':
            localStorage.clear();
            window.location.href = 'index.html';
            break;
        default:
            break;
    }
}

export function keyupFunction(event) {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break
    }
    // enemy keys
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break
    }
}
