'use strict';

const io = require('socket.io-client');
const util = require('util');


/**
 *
 *
 * @class Subscriber
 */
class Subscriber {
  /**
   *Creates an instance of Subscriber.
   * @param {*} namespace
   * @memberof Subscriber
   */
  constructor(namespace) {
    this.connection = io.connect(`http://localhost:3003/${namespace}`);
    this.events = [];
    this.namespace = namespace;
    this.connection.on('events-pass' , events => {

      this.events = events;


    });
    this.connection.on('sub-emit', ( event, payload ) => {

      if(this.events.includes(event)){
        this.cb(payload);
      }else{ console.log(`${event} room does not exist`); }


    });
  }

  
  /**
   *
   *
   * @param {*} event
   * @param {*} cb
   * @memberof Subscriber
   */
  subscribe(event , cb) {
    // console.log(util.inspect(this.connection,{ showHidden: true, depth: null }))
    console.log(`subscribed to ${event} in ${this.namespace}...`);

    this.connection.emit('join', event);
    this.cb = cb;

  }

}


module.exports = Subscriber;