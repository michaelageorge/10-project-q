'use strict';

class Subscriber {
  constructor(namespace) {
    this.connection = io.connect(`http://localhost:3000/${namespace}`);
  }

  subscribe(room) {
    this.connection.emit('join', room)
  }
}