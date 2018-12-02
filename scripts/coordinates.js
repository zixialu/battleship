// MARK: - Coordinates

// Verify if a vector is a valid coordinate. Returns true if input is within the bounds of the board, and false otherwise.
const validate = function isCoordinateWithinBounds({ x, y }) {
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
