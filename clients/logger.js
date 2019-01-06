const Q = require('../lib/subscriber.js');

const db = new Q('database');


console.log('db', db);

db.subscribe('delete', (payload) => {
  console.log('delete happened', payload);
});

db.subscribe('create', (payload) => {
  console.log('create happened', payload);
});

db.subscribe('banana', (payload) =>{
  console.log('banana happened', payload);
});

// console.log('subscriptions ', db.subscriptions);