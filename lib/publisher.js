'use strict';

const io = require('socket.io-client');



class Publisher {
  constructor() {
  this.connection = io.connect(`http://localhost:3003`);
  }
  
  publish(namespace, event, payload) {
    console.log( `sending ${event} payload to ${namespace}`);

    this.connection = io.connect(`http://localhost:3003/${namespace}`);

    this.connection.emit('publish', event , payload );

  }

}

const Pub = new Publisher();
Pub.publish('database', 'create', 'data')

module.exports = Publisher;