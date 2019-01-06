'use strict';
const io = require('socket.io-client');

class Q {
  constructor(namespace) {
    this.connection = io.connect(`http://localhost:3000/${namespace}`);
    this.subscriptions = [];
    console.log(this.connection);
  }

  subscribe(room) {
    //while any room can be joined, only certain rooms should emit something?
    this.connection.emit('join', room);
    console.log('joined room', room);
    this.subscriptions.push(room);
    console.log('all rooms, ', this.subscriptions);

  }

  subscriptions(){
    console.log('all rooms, ', this.subscriptions);
  }
}

module.exports = Q;