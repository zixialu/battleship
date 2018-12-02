// MARK: - History
var history = [];
var initialBoards = {};
var playerOrder = [];

const initializeHistory = function getInitialBoardState(boards, order) {
  initialBoards = boards;
  playerOrder = order;
};

const writeHistory = function pushActionToHistory(attackObject) {
  history.push(attackObject);
};

const getHistory = function getCompleteHistory() {
  return history;
};


// MARK: - Export
module.exports = { initializeHistory, writeHistory, getHistory };
