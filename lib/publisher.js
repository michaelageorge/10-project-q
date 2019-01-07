'use strict';

const io = require('socket.io-client');



/**
 *
 *
 * @class Publisher
 */
class Publisher {
  /**
   *Creates an instance of Publisher.
   * @memberof Publisher
   */
  constructor() {
    this.connection = io.connect(`http://localhost:3003`);
  }
  
  /**
   *
   *
   * @param {*} namespace
   * @param {*} event
   * @param {*} payload
   * @memberof Publisher
   */
  publish(namespace, event, payload) {

    console.log( `sending ${event} payload to ${namespace}`);

    this.connection = io.connect(`http://localhost:3003`);
    this.connection.emit('publish', namespace, event , payload );

  }

}


module.exports = Publisher;