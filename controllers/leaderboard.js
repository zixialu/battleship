const model = require('/models/leaderboard');

const get = function getLeaderboard() {
  // TODO: Make and return a deep copy instead of the original
  return model;
};

const post = function postScoreToLeaderboard(name, score) {
  // Add new score to table
  model.push({
    name,
    date: new Date(),
    score
  });
  // Sort table
  model.sort((a, b) => a.score - b.score);
};

module.exports = { get, post };
