'use strict';

const io = require('socket.io-client');



class Subscriber {
  constructor(namespace) {
  this.connection = io.connect(`http://localhost:3003/${namespace}`);

  }
  // event listener that listens for publisher to emit the room


  subscribe(event , cb ) {
    this.connection.emit('join', event );
    // console.log( `sending ${event} payload to ${namespace}`);

    // this.connection.on('publish', (event, payload)=>{
    //   return payload;
    // });//get the payload
    console.log('connection', this.connection);

    cb('payload');
  }

}
// const suber = new Subscriber('database');
// suber.subscribe('network' , 'attack' , 'data');

module.exports = Subscriber;