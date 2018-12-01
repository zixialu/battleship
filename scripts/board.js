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

// Translate between coordinate strings and vector objects.
const translateCoordinate = {
  // Returns a vector object from a coordinate string, e.g. C4 => { 2, 3 }.
  toPosition: function toPositionFromString(str) {
    // TODO: Validate str is a coordinate
    const x = str.charCodeAt(0) - 65; // 65 is the charCode for 'A'
    const y = Number(str.split(1));
    return { x, y };
  }

  // Returns a coordinate string from a vector object, e.g. { 2, 3 } => C4.
  toString: function toStringFromPosition({ x, y }) {
    return String.fromCharCode(x + 65) + y;
  }
};