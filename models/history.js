/*
 * History action objects are generally in the form:
 *  {
 *    originPlayer,
 *    targetPlayer,
 *    coordinates,
 *    isHit: true,
 *    [shipType,]
 *    [isSunk]
 *  }
 */
const actions = [];
const initialBoards = {};
const playerOrder = [];

module.exports = {
  actions,
  initialBoards,
  playerOrder
};
