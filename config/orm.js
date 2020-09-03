const connection = require("../config/connection.js");



function printQuestionMarks(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


function objToSql(ob) {
    const arr = [];

    for (let key in ob) {
        const value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
              }

              if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
              }

              arr.push(key + "=" + value);
            }
          }

          return arr.toString();
}










const orm = {
    selectAll: function(tableName, cb) {
        const queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(tableName, cols, vals, cb) {
        let queryString = "INSERT INTO" + tableName;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(tableName, objColVals, condition, cb) {
        let queryString = "UPDATE" + tableName;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;

