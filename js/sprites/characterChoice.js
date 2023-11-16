import { Sprite } from "../Sprite.js";
const canvases = document.querySelectorAll('.articles canvas');

const scaleConfig = [
    { scale: 2 },
    { scale: 2 },
    { scale: 2 },
    { scale: 2 },
    { scale: 2 },
];
const spritesConfig = [
    { frameMax: 10, scale: 2, offSet: { x: 78, y: 50 } },
    { frameMax: 10, scale: 2, offSet: { x: 50, y: 30 } },
    { frameMax: 4, scale: 2, offSet: { x: 180, y: 100 } }, 
    { frameMax: 6, scale: 2, offSet: { x: 40, y: 50 } }, 
    { frameMax: 8, scale: 2, offSet: { x: 180, y: 100 } }, 
    { frameMax: 4, scale: 2, offSet: { x: 0, y: -15 } }, 
];

function startAnimations() {
    canvases.forEach((canvas, index) => {
        const c = canvas.getContext('2d');

        const sprite = new Sprite({
            ctx: c,
            position: { x: 0, y: 0 },
            imageSrc: `../assets/${index + 1}/Idle.png`,
            scale: spritesConfig[index].scale,
            frameMax: spritesConfig[index].frameMax,
            offSet: spritesConfig[index].offSet, // { x: 78, y: 50 }, 
            positionOnInvert: 50
        });

        function loop() {
            c.fillStyle = 'red';
            c.fillRect(0, 0, canvas.width, canvas.height);
            sprite.update();
            requestAnimationFrame(loop);
        }

        loop();
    });
}

startAnimations();