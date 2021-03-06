const constants = require('/constants');
const coordinates = require('/controllers/coordinates');

// MARK: - Ships

/*
 * Create and return a new ship object from a type, top-left position, and
 * orientation.
 */
const newShip = function createNewShip(type, { x, y }, isHorizontal) {
  var coords = [];
  for (let i = 0; i < constants.SHIP_LENGTH[type]; i++) {
    const newCoordinate = {
      x: isHorizontal ? x + i : x,
      y: isHorizontal ? y : y + i
    };
    coords.push(newCoordinate);
  }
  var isDamaged = Array(constants.SHIP_LENGTH[type]).fill(false);
  var isSunk = false;

  return {
    type,
    coordinates: coords,
    isDamaged,
    isSunk
  };
};

/*
 * Verify if a ship is in in a valid location. Returns true if the ship is
 * within the bounds of the board and does not overlap with existing ships, and
 * false otherwise.
 */
const validate = function isShipLocationLegal(ship, player) {
  for (let coordinate in ship.coordinates) {
    if (!coordinates.validate(coordinate)) {
      return false;
    }
    // TODO: Implement ship collision detection.
    return true;
  }
};

/*
 * Return whether or not the ship has been completely sunk (all its sections
 * have been damaged).
 */
const isDestroyed = function isShipDestroyed(ship) {
  for (let isSegmentDamaged of ship.isDamaged) {
    if (!isSegmentDamaged) {
      return false;
    }
  }

  return true;
};

// Damage a segment of a ship.
const damage = function damageShipSegment(ship, index) {
  ship.isDamaged[index] = true;
};

// Sink a ship.
const sink = function sinkShip(ship) {
  ship.isSunk = true;
};

// MARK: - Export
module.exports = { newShip, validate, isDestroyed, damage, sink };
