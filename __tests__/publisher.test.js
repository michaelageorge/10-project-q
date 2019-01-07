'use strict';

const publisher = require('../lib/publisher');

describe('testing jest' , () => {

  test('see if console.log was called', () => {
    const q = new publisher();
    const spy = jest.spyOn(console, 'log');
    q.publish('database', 'delete', {id:77});
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  test('if new object is created', () => {
    const q = new publisher();
    expect(typeof(q)).toBe('object');
  });
});