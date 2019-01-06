'use strict';

let io = null;

class Q {

  constructor(Q){
    this.io = io;
    this.Q = io.of(`/${Q}`);
    this.events = [];

    this.Q.on('connection', (socket) => {
      console.log(`New connection: ${socket.id}`);
      socket.on('publish', (event , payload ) => {
        console.log(`Event: ${event}`);
        console.log(`Payload: ${payload}`);
      });
      socket.on('join', (event, payload) => {
        socket.join(event);
        console.log(`Event: ${event}`);
        console.log(`Payload: ${payload}`);
      });

    });

  }

  // this files needs two hard coded listeners.
  // one for publish methods and one for subscribe methods

  monitorEvent(event){

    if(this.events){
      this.events.push(event);
    }
  }

  static start() {
    io = require('socket.io')(3003);
    return 'static method has been called';
  }

}

module.exports = Q;


// if room is in events run join method

// socket.on('join', (room) => {
//   for(let i = 0; i < events.length; i++){
//     if(room === events[i]){
//       socket.join(room);
//       console.log(`someone is joining room: ${room}`);
//       break;
//     }
//   }
//   return;
// });

// if room is in events emit payload

// socket.on('publish', (room , payload) => {
//   for(let i = 0; i < events.length; i++){
//     if(room === events[i]){
//       io.to(room).emit(payload);
//       console.log(`emitting payload to room: ${room}`);
//       break;
//     }
//   }
//   return;
// });







