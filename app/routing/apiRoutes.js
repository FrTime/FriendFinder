const friends = require("../data/friends.js");
var path = require("path");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    friends.push(req.body);
  });
};
