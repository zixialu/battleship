// MARK: - Constants
const BOARD_SIZE = 10;
const SHIP_LENGTH = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2
};

// MARK: - Board
var playerBoards = {};

// Create an empty player board.
const newPlayerBoard = function createNewPlayerBoard() {
  return {
    ships: [],
    isAlive: true
  };
}

// Add a ship to a player's board.
const addShipToBoard = function addNewShipToPlayerBoard(ship, player) {
  if (validateShip(ship, player)) playerBoards[player].ships.push(ship);
}


// MARK: - Coordinates

// Verify if a vector is a valid coordinate. Returns true if input is within the bounds of the board, and false otherwise.
const validateCoordinate = function isCoordinateWithinBounds({ x, y }) {
  if (row < 0 || row >= BOARD_SIZE) return false;
  if (col < 0 || col >= BOARD_SIZE) return false;
  return true;
}

const translateCoordinate = {
  // Return a vector object from a coordinate string, e.g. C4 => { 2, 3 }.
  toPosition: function toPositionFromString(str) {
    const x = str.charCodeAt(0) - 65; // 65 is the charCode for 'A'
    const y = Number(str.split(1)) - 1;
    return { x, y };
  }

  // Return a coordinate string from a vector object, e.g. { 2, 3 } => C4.
  toString: function toStringFromPosition({ x, y }) {
    return String.fromCharCode(x + 65) + (y + 1);
  }
};


// MARK: - Ships

// Create and return a new ship object from a type, top-left position, and orientation.
const newShip = function createNewShip(type, { x, y }, isHorizontal) {
  var coordinates = [];
  for (let i = 0; i < SHIP_LENGTH[type], i++) {
    const newCoordinate = {
      x: isHorizontal ? x + i : x,
      y: isHorizontal ? y : y + i
    };
  }
  var isDamaged = Array(SHIP_LENGTH[type]).fill(false);
  var isSunk = false;

  return {
    type,
    coordinates,
    isDamaged,
    isSunk
  };
}

// Verify if a ship is in in a valid location. Returns true if the ship is within the bounds of the board and does not overlap with existing ships, and false otherwise.
const validateShip = function isShipLocationLegal(ship, player) {
  for (let coordinate in ship.coordinates) {
    if (!validateCoordinate(coordinate)) return false;
    // TODO: Implement ship collision detection.
    return true;
  }
}

// Return whether or not the ship has been completely sunk (all its sections have been damaged).
const isDestroyed = function isShipDestroyed(ship) {
  for (let isSegmentDamaged of ship.isDamaged) {
    if (!isSegmentDamaged) return false;
  }

  return true;
}

// Damage a segment of a ship.
const damage = function damageShipSegment(ship, index) {
  ship.isDamaged[index] = true;
}

// Sink a ship.
const sink = function sinkShip(ship) {
  ship.isSunk = true;
}


// MARK: - Play

// Resolve an attack on a player's board, returning whether or not something was hit. If a ship was hit, additionally return the ship's type and whether the attack sank it.
const attack = function attackPlayerAtCoordinate(player, { x, y }) {
  playerBoards[player].ships.forEach(function (ship) {
    for (let i = 0; i < ship.coordinates.length; i++) {
      damage(ship, i);

      const isSunk = isDestroyed(ship);
      if (isSunk) sink(ship);

      return {
        isHit: true,
        shipType: ship.type,
        isSunk: sunk
      };
    }
  });
  return { isHit: false };
}
