// NEAL DREHER 2019-07-11

/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/*## Event Emitter

An event emitter triggers an event to which anyone can listen. Different JS 
libraries offer different implementations of an Event Emitter for different 
purposes, but the basic idea is to provide a framework for issuing events and 
subscribing to them.

This demonstrates all the basic functionality of an EventEmitter. The `on` aka
`addListener` method (basically the subscription method) allows you to register
an event to watch for and the callback function will execute when the event 
is triggered.

The `emit` method (the publish method), on the other hand, allows you to 
"emit" (register) an event, which causes all callbacks registered to the event 
to 'fire', (get called).

#### Additional Info:

When triggered with arguments, it passes all the arguments to each callback, 
not one to each corresponding listener.

A good example is Backbone's event system: http://backbonejs.org/#Events-trigger

Node's `EventEmitter` also works like this.

const EventEmitter = require('events');
const events = new EventEmitter();
events.on('event', (a, b, c) => {
  console.log(a,b,c);
});
events.on('event', (a, b, c) => {
  console.log(c,b,a);
});
events.emit('event', 'a', 'b', 'c');

logs out:
a b c
c b a


This exercise is designed to provide a general idea on "what an event emitter 
is". When you learn and use event emitters, you should have a basic understanding 
on how it works, but you will still have a lot to learn about Event Emitters!
*/

// MyEventEmitter Class
//     is an object
//     has an "events" property
//     has an "addListener" and "emit" property on its prototype
//     stores an "event" and a callback function in an array
//     stores multiple "callback" functions for a single event
//     stores multiple events
//     the 'emit' method invokes the event listener for the specified event
//     the emit method invokes every event's associated functions with the apply method
//     the "emit" method invokes every callback function for the specified event

class MyEventEmitter {
    constructor() {
        this.events = {};
    };
    addListener(event, callback) {
        // stores multiple "callback" functions for a single event
        // THE EVENT ALREADY EXISTS
        if (this.events[event]) this.events[event].push(callback);
        // THE EVENT IS BEING NEWLY ADDED
        else this.events[event] = [callback];
    };
    // the 'emit' method invokes the event listener for the specified event
    emit(event, ...args) {
        // GIVEN A PASSED EVENT, CALL EVERY FUNCTION WITHIN
        const eventsCallback = item => item.apply(null, args);
        // const eventsCallback = item => item.call(null, ...args);
        this.events[event].forEach(eventsCallback);
    };

}
