![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## 10 - Stacks and Queues

### Author: Michael George, Hannah Ingham, George Raymond --- Code 401d28

### Links and Resources
[![Build Status](https://travis-ci.com/michaelageorge/10-project-q.svg?branch=master)](https://travis-ci.com/michaelageorge/10-project-q)

* [repo](https://github.com/michaelageorge/10-project-q)
* [travis](https://travis-ci.com/michaelageorge/10-project-q)

### Modules
#### `lib/publisher.js`
#### `lib/server-queue.js`
#### `lib/subscriber.js`
#### `server.js`

##### Exported Values and Methods
class Q
  monitorEvent(event);
  static start();

class Publisher
  publish();

class Subscriber
  subscribe(event, cb);

### Setup
#### `.env` requirements
* `PORT` - 3003


#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.

#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

