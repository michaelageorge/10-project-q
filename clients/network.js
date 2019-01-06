'use strict';

const Q = require('../lib/subscriber');

const network = new Q('network');

const db = new Q('database');

network.subscribe('attack' , (payload) => {
  console.log('Shields up!!!', payload);
});
