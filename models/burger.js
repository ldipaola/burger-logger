// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");


const burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: (col, val, cb) => {
      orm.insertOne("burgers", col, val, function(res) {
        cb(res);
      });
    },
    updateOne: (objColVals, condition, cb) => {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
