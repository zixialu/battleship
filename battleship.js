const express = require('express');
const bodyParser = require('body-parser');
const board = require('./scripts/board');
const history = require('./scripts/history');

const app = express();
const PORT = 8080;

// Set view engine to ejs
app.set('view engine', 'ejs');

var playerOrder = [];
var gameOver = false;

// MARK: - Game Loop
const gameLoop = function() {
  while (!gameOver) {
    for (player of playerOrder) {
      if (!getBoards[player].isAlive) {
        // TODO: Implement game over
        gameOver = true;
        break;
      }

      // TODO: Implement run turn
    }
  }
};

const startGame = function setupGameObjects() {
  // Instantiate Players
  // TODO: Implement logic for who goes first, and player naming
  const p1 = 'Player 1';
  const p2 = 'Player 2';
  playerOrder = [p1, p2];
  board.newPlayer(p1);
  board.newPlayer(p2);

  // Initialize History
  history.initializeHistory(board.getBoards(), playerOrder);

  // Start game loop
  gameLoop();
};

// MARK: - Endpoints
app.get('/', (req, res) => {
  res.render('setup');
});

app.post('/setup', (req, res) => {
  // TODO: Start game with req.body values
  res.redirect(303, 'play');
});

app.get('/play', (req, res) => {
  // TODO: Setup & render game.ejs
});

//MARK: - Ports
// Listening for requests
app.listen(PORT, () => {
  console.log(`tinyApp listening on port ${PORT}!`);
});

// MARK: - Start
startGame();
