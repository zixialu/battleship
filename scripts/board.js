// MARK: - Constants
const BOARD_SIZE = 10;
const SHIP_LENGTH = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2
};


// MARK: - Coordinates

// Verify if a vector is a valid coordinate.
// Returns true if input is within the bounds of the board, and false otherwise.
const validateCoordinate = function isCoordinateWithinBounds({ x, y }) {
  if (row < 0 || row >= BOARD_SIZE) return false;
  if (col < 0 || col >= BOARD_SIZE) return false;
  return true;
}

const translateCoordinate = {
  // Return a vector object from a coordinate string, e.g. C4 => { 2, 3 }.
  toPosition: function toPositionFromString(str) {
    // TODO: Validate str is a coordinate
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
const newShip = function createNewShip(type, { x, y }, isHorizontal) {
  var coordinates = [];
  for (let i = 0; i < SHIP_LENGTH[type], i++) {
    const newCoordinate = {
      x: isHorizontal ? x + i : x,
      y: isHorizontal ? y : y + i
    };
  }
  var isDamaged = Array(SHIP_LENGTH[type]).fill(false);

  return {
    type,
    coordinates,
    isDamaged
  };
}

// Verify if a ship is in in a valid location.
// Returns true if the ship is within the bounds of the board and does not overlap with existing ships, and false otherwise.
const validateShip = function isShipLocationLegal(ship) {
  for (let coordinate in ship.coordinates) {
    if (!validateCoordinate(coordinate)) return false;
    // TODO: Implement ship detection.
    return true;
  }
}
