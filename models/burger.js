// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");


const burger = {
    selectAll: (cb) => {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: (col, val, cb) => {
      orm.create("burgers", col, val, function(res) {
        cb(res);
      });
    },
    updateOne: (objColVals, condition, cb) => {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
