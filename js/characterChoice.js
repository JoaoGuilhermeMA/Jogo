import { Sprite } from "./Sprite.js";
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

// Obtendo todos os elementos article
const articles = document.querySelectorAll('.articles article');
let currentPlayer = 1; // Controla o jogador atual

// Função para atualizar o título com o nome do jogador
const updateTitle = () => {
  const playerName = localStorage.getItem(`player${currentPlayer}Name`);
  if (playerName) {
    document.querySelector('h1').textContent = `Escolha de ${playerName}`;
  } else {
    document.querySelector('h1').textContent = `Escolha do jogador ${currentPlayer}`;
  }
};

// Chamando a função para definir o título inicial
updateTitle();

// Adicionando um evento de clique a cada elemento article
articles.forEach((article, index) => {
  article.addEventListener('click', () => {
    const player1Selection = localStorage.getItem('player1Character');
    const player2Selection = localStorage.getItem('player2Character');

    if (currentPlayer === 1 && !player1Selection) {
      localStorage.setItem('player1Character', index + 1);
      console.log(`Jogador 1 selecionou o personagem ${index + 1}.`);
      currentPlayer = 2; // Muda para o próximo jogador
    } else if (currentPlayer === 2 && !player2Selection) {
      localStorage.setItem('player2Character', index + 1);
      console.log(`Jogador 2 selecionou o personagem ${index + 1}.`);
      currentPlayer = 1; // Muda para o próximo jogador

      // Verifica se ambos os jogadores já fizeram suas seleções
      if (localStorage.getItem('player1Character') && localStorage.getItem('player2Character')) {
        console.log('Ambos os jogadores fizeram suas seleções.');
        // Redireciona para a página jogar.html após a seleção do segundo jogador
        window.location.href = 'jogar.html';
      }
    }

    // Atualiza o título para exibir o próximo jogador
    updateTitle();
  });
});


