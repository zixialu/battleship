const coordinates = require('./coordinates');
const ships = require('./ships');


// MARK: - Board
var playerBoards = {};

// Returns a deep copy of playerBoards
const getBoards = function getPlayerBoardsCopy() {
  // FIXME: Is this the most efficient way to deep copy an object?
  return JSON.parse(JSON.stringify(playerBoards));
};

// Create an empty player board inside playerBoards.
const newPlayer = function createNewPlayerBoard(player) {
  playerBoards[player] = {
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
const attack = function attackPlayerAtCoordinate(origin, target, { x, y }) {
  playerBoards[target].ships.forEach(function (ship) {
    for (let i = 0; i < ship.coordinates.length; i++) {
      damage(ship, i);

      const isSunk = ships.isDestroyed(ship);
      if (isSunk) { ships.sink(ship); }

      return {
        originPlayer: origin,
        targetPlayer: target,
        coordinates: { x, y },
        isHit: true,
        shipType: ship.type,
        isSunk: sunk
      };
    }
  });
  return {
    originPlayer: origin,
    targetPlayer: target,
    coordinates: { x, y },
    isHit: false
  };
};

// Return true if attack target is within bounds and hasn't been targeted before
const validateAttack = function isAttackLegal(player, { x, y }) {
  // Check that target is within bounds
  if (!coordinates.validate({ x, y })) { return false; }

  // Check that target has not already been attacked
  // TODO: Implement this

  return true;
};


// MARK: - Export
module.exports = { newPlayer, addShipToBoard, attack };
