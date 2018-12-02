var history = [];
var initialBoards = {};

const initiateHistory = function getInitialBoardState(boards) {
  initialBoards = boards;
};

const writeHistory = function pushActionToHistory(attackObject) {
  history.push(attackObject);
};

const getHistory = function getCompleteHistory() {
  return history;
};

module.exports = { initiateHistory, writeHistory, getHistory };
