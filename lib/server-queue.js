'use strict';

let io = require('socket.io')(3000);

class Q {

  constructor(Q){
    this.Q = io.of(Q);
    // this.Q.on('connection' , (socket) => {
    //   console.log(socket.id);
    // })
    console.log('constructor log');
  }
  
  connection() {
    this.Q.on('connection' , (socket) => {
      console.log(socket.id);
    })
  }
  doSomething(){
    console.log('did something');
    // socket.emit("something")
  }


  static start() {
    io = require('socket.io')(3033);
    // do something else
    // io.server(3000)
    // console.log(io);
    return 'static method has been called';
  }
}

module.exports = Q;







