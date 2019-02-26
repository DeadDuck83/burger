// Import connection.
var connection = require("../config/connection.js");





// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(tableInput, col, val, cb) {
    var queryString = "INSERT INTO " + tableInput + " (burger_name, devoured) VALUE ('"+ val[0] + "', " + val[1] + ");"
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });

  },
  updateOne: function(tableInput, objColVals, condition, cb) {
    console.log(objColVals);
    var queryString = "UPDATE "+ tableInput+" SET devoured = "+objColVals.devoured+" WHERE "+ condition+";"
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
