const board = require('./scripts/board');
const history = require('./scripts/history');


var playerOrder = [];

const startGame = function setupGameObjects() {
  // Instantiate Players
  // TODO: Implement logic for who goes first, and player naming
  const p1 = "Player 1";
  const p2 = "Player 2";
  playerOrder = [p1, p2];
  board.newPlayer(p1);
  board.newPlayer(p2);

  // Initialize History
  history.initializeHistory(board.getBoards(), playerOrder);

  // Start Game
  gameLoop();
};

const gameLoop = function () {
  while(true) {
    for (player of playerOrder) {
      if (!getBoards[player].isAlive) {
        // TODO: Implement game over
        break;
      }

      // TODO: Implement run turn
    }
  }
};

startGame();
