'use strict';

let io = null;

class Q {

  constructor(Q){
    this.io = io;
    this.Q = io.of(`/${Q}`);
    this.Q.on('connection', this.connect.bind(this));
    this.events = [];
    // console.log('constructor log');
  }

  connect(socket) {
    console.log('triggered the connection', socket.id);
    // socket.on('join', (room, cb)=>{
    //   socket.join(room);
    //   cb && cb(room);
    // })
  }

  doSomething(){
    console.log('did something');
    // socket.emit("something")
  }


  static start() {
    io = require('socket.io')(3003);
    return 'static method has been called';
  }

  monitorEvent(event){
    if(this.events){
      this.events.push(event);
    }
    console.log(this.events);
  }
}

module.exports = Q;







