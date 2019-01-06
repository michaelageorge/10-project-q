'use strict';

const io = require('socket.io-client');



class Subscriber {
  constructor() {
  this.connection = io.connect(`http://localhost:3003`);
  }
  
  subscribe(namespace , event , payload) {
    console.log( `sending ${event} payload to ${namespace}`);

    this.connection = io.connect(`http://localhost:3003/${namespace}`);

    this.connection.emit('subscribe', event , payload );
  }

}
const suber = new Subscriber('database');
suber.subscribe('network' , 'attack' , 'data');

module.exports = Subscriber;