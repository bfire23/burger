const orm = require("../config/orm.js");

const burger = {
    selectALL: function(cb) {
        orm.selectALL("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) {
        orm.updateOne("burgers", updateColumnName, updateRowVal, searchColumnName, searchRowVal, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;


