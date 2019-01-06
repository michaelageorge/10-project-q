'use strict';

const io = require('socket.io-client');



class Publisher {
  constructor() {
  this.connection = io.connect(`http://localhost:3003`);
  }
  
  publish(namespace, event, payload) {

    console.log( `sending ${event} payload to ${namespace}`);

    this.connection = io.connect(`http://localhost:3003`);
    this.connection.emit('publish', namespace, event , payload );

  }

}


module.exports = Publisher;