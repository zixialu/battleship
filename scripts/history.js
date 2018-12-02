/*
 * History objects are generally in the form:
 *  {
 *    originPlayer,
 *    targetPlayer,
 *    coordinates,
 *    isHit: true,
 *    [shipType,]
 *    [isSunk]
 *  }
 */

const coordinates = require('./coordinates');


// MARK: - History
var history = [];
var initialBoards = {};
var playerOrder = [];

const initializeHistory = function getInitialBoardState(boards, order) {
  initialBoards = boards;
  playerOrder = order;
};

const writeHistory = function pushActionToHistory(histObj) {
  history.push(histObj);
};

const getHistory = function getCompleteHistory() {
  return history;
};


// MARK: - Log
const getLogMessage = function getLogMessageFromHistoryElement(histObj) {
  const coordsStr = coordinates.translate.toString(histObj.coordinates);
  var logMessage = `${histObj.originPlayer} shoots at ${coordsStr}: `;
  logMessage += histObj.isHit ? 'HIT' : 'MISS';
  if (histObj.isSunk) {
    logMessage += `\n${histObj.originPlayer} has sunk a ${histObj.shipType}!`
  }

  return logMessage;
};


// MARK: - Export
module.exports = { initializeHistory, writeHistory, getHistory };
