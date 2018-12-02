const ships = require('./ships');


// MARK: - Board
var playerBoards = {};

// Create an empty player board.
const newPlayerBoard = function createNewPlayerBoard() {
  return {
    ships: [],
    isAlive: true
  };
};

// Add a ship to a player's board.
const addShipToBoard = function addNewShipToPlayerBoard(ship, player) {
  if (ships.validate(ship, player)) { playerBoards[player].ships.push(ship); }
};


// MARK: - Play

/*
 * Resolve an attack on a player's board, returning whether or not something was
 * hit. If a ship was hit, additionally return the ship's type and whether the
 * attack sank it.
 */
const attack = function attackPlayerAtCoordinate(player, { x, y }) {
  playerBoards[player].ships.forEach(function (ship) {
    for (let i = 0; i < ship.coordinates.length; i++) {
      damage(ship, i);

      const isSunk = ships.isDestroyed(ship);
      if (isSunk) { ships.sink(ship); }

      return {
        isHit: true,
        shipType: ship.type,
        isSunk: sunk
      };
    }
  });
  return { isHit: false };
};

// MARK: - Export
module.exports = { newPlayerBoard, addShipToBoard, attack };
