// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  burgerMenu: function(cb) {
    orm.selectAll("burgers", function(resp) {
      cb(resp);
    });
  },
  cookBurger: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(resp) {
      cb(resp);
    });
  },
  eatBurger: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(resp) {
      cb(resp);
    });
  }
};

module.exports = burger;