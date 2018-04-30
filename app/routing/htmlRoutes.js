const path = require("path"),
  express = require("express");

module.exports = app => {
  app.use(express.static(path.join(__dirname, "../public/")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    res.sendFile(path.join(__dirname, "/", "../public/home.html"));
  });

  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    res.sendFile(path.join(__dirname, "/", "../public/survey.html"));
  });
};
