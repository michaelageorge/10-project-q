'use strict';

let io = null;

/**
 *
 *
 * @class Q
 */
class Q {

  /**
   *Creates an instance of Q.
   * @param {*} Q
   * @memberof Q
   */
  constructor(Q){
    this.io = io;
    this.Q = io.of(`/${Q}`);
    this.events = [];

    this.Q.on('connection', (socket) => {
      console.log(`New connection: ${socket.id}`);

      socket.on('join', (event) => {
        socket.emit('events-pass' , this.events);
        socket.join(event);
      });
    });
  }


  /**
   *
   *
   * @param {*} event
   * @memberof Q
   */
  monitorEvent(event){
    if(this.events){
      this.events.push(event);
    }

  }

  /**
   *
   *
   * @static
   * @memberof Q
   */
  static start() {
    io = require('socket.io')(3003);
    io.on('connection' , (socket) => {

      socket.on('publish', (namespace, event , payload ) => {
        console.log('server heard publish emit');
        let nsp = io.of(`/${namespace}`);
        nsp.emit( 'sub-emit' , event, payload);
      });
    });
  }


}

module.exports = Q;