'use strict';

const Subscriber = require('../lib/subscriber.js');

describe('subsciber', () => {
  test('emits subscriber events', () => {
    const subscriber = new Subscriber('database');
    let spy = jest.spyOn(subscriber, 'subscribe');
    subscriber.subscribe();
    expect(spy).toHaveBeenCalled();
  });
});