const promise = require('bluebird');

var options = {
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:anthony@localhost:5432/proyecto_assets';
var db = pgp(connectionString);

console.log('connexion ok');

module.exports = db;