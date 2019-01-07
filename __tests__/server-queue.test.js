'use strict';

const Q = require('../lib/server-queue.js');

describe('testing jest' , () => {
  
  test('seeing if start was called', () => {
    const spy = jest.spyOn(Q, 'start');
    Q.start();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  test('if new object is created', () => {
    const server = new Q('namespace');
    const spy = jest.spyOn(server, 'monitorEvent');
    server.monitorEvent('test');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

