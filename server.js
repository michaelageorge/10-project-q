'use strict';
const util = require('util');
// const io = require('socket.io')(3003);

const Q = require('./lib/server-queue.js');

Q.start();

const db = new Q('database');

// io.on('connection', (socket)=>{
//   console.log(socket.id);
// });

// db.connect();
// db.doSomething();
// console.log(db);
// db.monitorEvent('create');
// db.monitorEvent('update');
// db.monitorEvent('delete');

const network = new Q('network');
// network.monitorEvent('attack');
// network.monitorEvent('no-service');

// network.connect();
// util.inspect(db, { showHidden: true, depth: null }