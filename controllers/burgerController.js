var express = require("express");

// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burgers.js");
module.exports = function (app) {

  // Create all our routes and set up logic within those routes where required.
  app.get("/", function (req, res) {
    burgers.all(function (data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers", function (req, res) {
    burgers.create([
      "burgerName", "eaten"
    ], [
      req.body.burgerName, req.body.eaten
    ], function (result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });

  app.put("/api/burgers/:eaten", function (req, res) {
    var condition = "eaten = " + req.params.eaten;

    console.log("condition", condition);

    burgers.update({
      eaten: req.body.eaten
    }, condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  app.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burgers.delete(condition, function (result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
}
// Export routes for server.js to use.

