var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function (req, res) {
    burger.burgerMenu(function (data) {
        res.render('index', { burgers: data })
    });
});

router.post("/api/burgers", function (req, res) {
    burger.cookBurger(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        // Send back the ID of the new quote
        res.json({ result });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.eatBurger({
      devoured: req.body.devoured
    }, condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


module.exports = router;