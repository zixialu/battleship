const ships = require('./ships');
const history = require('./history');


// MARK: - Board
var playerBoards = {};

// Create an empty player board inside playerBoards.
const newPlayerBoard = function createNewPlayerBoard(player, goesFirst) {
  playerBoards[player] = {
    goesFirst,
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
        target: player,
        coordinates: { x, y },
        isHit: true,
        shipType: ship.type,
        isSunk: sunk
      };
    }
  });
  return {
    target: player,
    coordinates: { x, y },
    isHit: false
  };
};

// MARK: - Export
module.exports = { newPlayerBoard, addShipToBoard, attack };
