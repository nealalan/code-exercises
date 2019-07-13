/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('MyEventEmitter Class', () => {
  let eventEmitter;

  beforeEach(() => {
    eventEmitter = new MyEventEmitter();
  });

  it('is an object', () => {
    expect(typeof eventEmitter).toBe('object');
  });

  it('has an "events" property', () => {
    expect(eventEmitter.hasOwnProperty('events')).toBe(true);
    expect(typeof eventEmitter.events).toBe('object');
  });

  it('has an "addListener" and "emit" property on its prototype', () => {
    expect(eventEmitter.hasOwnProperty('addListener')).toBe(false);
    expect(eventEmitter.hasOwnProperty('emit')).toBe(false);
    expect(typeof MyEventEmitter.prototype.addListener).toBe('function');
    expect(typeof MyEventEmitter.prototype.emit).toBe('function');
  });

  it('stores an "event" and a callback function in an array', () => {
    eventEmitter.addListener('greet', name => {
      return 'Hello, ' + name + '!';
    });

    expect(Array.isArray(eventEmitter.events.greet)).toBe(true);

    const handlerFunction = eventEmitter.events.greet[0];

    expect(handlerFunction('Scott')).toBe('Hello, Scott!');
  });

  it('stores multiple "callback" functions for a single event', () => {
    eventEmitter.addListener('greet', name => {
      return 'Hello, ' + name + '!';
    });

    eventEmitter.addListener('greet', () => {
      return 'How are you?';
    });

    expect(Array.isArray(eventEmitter.events.greet)).toBe(true);
    expect(eventEmitter.events.greet.length).toBe(2);
    expect(typeof eventEmitter.events.greet[0]).toBe('function');
    expect(typeof eventEmitter.events.greet[1]).toBe('function');
  });

  it('stores multiple events', () => {
    eventEmitter.addListener('greet', name => {
      return 'Hello, ' + name + '!';
    });

    eventEmitter.addListener('bye', name => {
      return 'Bye, ' + name + '!';
    });

    eventEmitter.addListener('shout', phrase => {
      return phrase.toUpperCase() + '!';
    });

    expect(Object.keys(eventEmitter.events)).toEqual(['greet', 'bye', 'shout']);
  });

  it("the 'emit' method invokes the event listener for the specified event", () => {
    /* Note: 
      the addListener method creates or adds functions to an event
      the emit method runs all the functions that are assigned to an event
    */
    let greetingString;
    let byeString;

    eventEmitter.addListener('greet', name => {
      greetingString = 'Hello, ' + name + '!';
    });

    eventEmitter.addListener('bye', name => {
      byeString = 'Bye, ' + name + '!';
    });

    eventEmitter.emit('greet', 'Emily');
    expect(greetingString).toBe('Hello, Emily!');

    eventEmitter.emit('bye', 'Emily');
    expect(byeString).toBe('Bye, Emily!');
  });

  it("the emit method invokes every event's associated functions with the apply method", () => {
    /* 
    Note:
      - Every event on the `events` property is assigned an array that holds functions to execute when the `emit` function
      calls the event. Every function in the events array is invoked with the `apply` method.
      
      The main reason `apply` is used is to leverage the second argument passed to `apply` 
      (the array that holds arguments that are passed (in order) to the function apply is called on). 
      You don't need to set a specific context of "this" when using apply in these spec 
      (first argument to `apply` assigns the context of "this" in the function apply is called on, you can pass it
      an empty object or the value null). e.g.  example.apply(null, ['firstArgument', 'secondArgument])
    */

    const callback = name => {
      return 'Hello, ' + name + '!';
    };

    spyOn(callback, 'apply').and.callThrough(); // checks if the apply method is called on the "callback" function

    eventEmitter.addListener('greet', callback);

    eventEmitter.emit('greet', 'Scott');

    expect(callback.apply).toHaveBeenCalled();
  });

  it('the "emit" method invokes every callback function for the specified event', () => {

    /* Note:
    
    - Review how rest parameters work: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
     - Rest parameters can be useful when you don't know how many arguments will be passed to a function.
    
     */

    const values = [];
    const name = (name, name2) => {
      values.push('Hello, ' + name + '!' + ' My name is ' + name2 + '.');
    };
    const phrase = name => {
      values.push('How are you, ' + name + '?');
    };

    eventEmitter.addListener('greet', name);

    eventEmitter.addListener('greet', phrase);

    eventEmitter.emit('greet', 'Patrick', 'Karen');
    expect(values).toEqual([
      'Hello, Patrick! My name is Karen.',
      'How are you, Patrick?',
    ]);
  });
});
