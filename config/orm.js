const connection = require('./connection.js');

const callDatabase = function (queryString, _callback) {
    connection.query(queryString, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            _callback(result);
        }
    });
}

const orm = {

    selectAll: function (_callback) {
        const queryString = 'SELECT * FROM burgers';
        callDatabase(queryString, _callback);
    },

    insert: function (burgerName, _callback) {
        const queryString = `INSERT INTO burgers(burger_name) VALUES('${burgerName}')`;
        callDatabase(queryString, _callback);
    },

    update: function (burgerId, _callback) {
        const queryString = `UPDATE burgers SET devoured=true WHERE id=${burgerId}`;
        callDatabase(queryString, _callback);
    },

    delete: function (burgerId, _callback) {
        const queryString = `DELETE FROM burgers WHERE id=${burgerId}`;
        callDatabase(queryString, _callback);
    }
};

module.exports = orm;