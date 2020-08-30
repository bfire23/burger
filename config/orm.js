const connection = require("./connection.js");


const orm = {
    selectALL: function (tableInput, cb) {
        const queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(results);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        
        connection.query(queryString, [table, col, vals], function (err, result) {
            if (err) throw err;
            cb(results);
        });
    },

    updateOne: function (table, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

        connection.query(queryString, [table, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;

