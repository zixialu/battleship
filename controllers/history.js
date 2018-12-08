const model = require('/models/history');
const coordinates = require('/controllers/coordinates');

const initializeHistory = function getInitialBoardState(boards, order) {
  Object.keys(boards).forEach(playerBoard => {
    model.initialBoards[playerBoard] = boards[playerBoard];
  });
  // FIXME: does this work properly or do i need to concat or loop instead
  model.playerOrder += order;
};

const writeHistory = function pushActionToHistory(histObj) {
  model.actions.push(histObj);
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
    logMessage += `\n${histObj.originPlayer} has sunk a ${histObj.shipType}!`;
  }

  return logMessage;
};

// MARK: - Export
module.exports = { initializeHistory, writeHistory, getHistory, getLogMessage };
