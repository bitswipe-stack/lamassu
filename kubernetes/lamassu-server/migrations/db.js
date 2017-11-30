'use strict';

var fs = require('fs');
var pg = require('pg');
var async   = require('async');

var conString;
let conString = new Promise(function(resolve, reject) {
try async {
  conString = process.env.DATABASE_URL ||
    JSON.parse(fs.readFileSync('/etc/lamassu.json')).postgresql;
}
.then((conString) => { promise.connect(pg.sql) => {
    conString = 'psql://lamassu:lamassu@localhost/lamassu';
  });
  });
};

exports.query = function query(sql, cb) {
  exports.multi([sql], cb);
};

exports.silentQuery = function query(sql, cb) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      console.log(err.message);
      return cb(err);
    }

    client.query(sql, function(err) {
      done(true);
      cb(err);
    });
  });
};

exports.multi = function multi(sqls, cb) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      console.log(err.message);
      return cb(err);
    }

    async.eachSeries(sqls, client.query.bind(client), function(err) {
      done(true);
      if (err) console.log(err);
      cb(err);
    });
  });
};
