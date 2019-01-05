'use strict';
const util = require('util');

const Q = require('./lib/server-queue.js');
Q.start();

const db = new Q('database');
db.connection()
// db.doSomething();
// console.log(db);
// db.monitorEvent('create');
// db.monitorEvent('update');
// db.monitorEvent('delete');

// const network = new Q('network');
// network.monitorEvent('attack');
// network.monitorEvent('no-service');

// util.inspect(db, { showHidden: true, depth: null }