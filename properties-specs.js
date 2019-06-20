var setProps = require('./properties');
/*
  setProps is an object. It has access to the
    - setPropsOnObj
    - setPropsOnArr
    - setPropsOnFunc

  as methods. The definitions for these methods come from
  properties.js. You don't have to touch anything in the test specs.
*/
describe('Properties on Object Literal', function() {
  var object;

  // the `beforeEach` function is called once before each unit test spec
  // "unit tests" or "tests" begin with the "it" function.
  beforeEach(function() {
    // Each test re-assigns an empty object literal to the object variable.
    object = {};
    setProps.setPropsOnObj(object);

    /* `setPropsOnObj is a function you need to define and create in `properties.js`.
    The variable `object` is passed to the setPropsOnObj function and adds properties
    on to the argument (which is an object literal).
    */
  });

  describe('the function `setPropsOnObj`', function() {
    it('sets x to 7', function() {
      expect(object.x).toEqual(7);
    });

    it('sets y to 8 (and we can use a string to access it)', function() {
      expect(object['y']).toEqual(8);
    });

    it("sets the property 'onePlus' to a function that adds one to its parameter", function() {
      expect(object.onePlus(4)).toEqual(5);
      expect(object['onePlus'](123)).toEqual(124);
    });
  });
});

/* Let's explore the idea of using Arrays instead of Object Literals.
One great feature of JavaScript is that Arrays are a specific
type of Object that has special features.  Everything that you can do
with objects, you can also do with arrays.
*/

describe('Properties on an Array Object', function() {
  var arrayObject;

  beforeEach(function() {
    arrayObject = [];
    setProps.setPropsOnArr(arrayObject);
  });

  describe('the function `setPropsOnArr`', function() {
    it('sets the property `hello` to a function that returns the string `Hello!`', function() {
      expect(arrayObject.hello()).toEqual('Hello!');
    });

    it('sets the property `full` to stack (and we can use a string to access it)', function() {
      expect(arrayObject['full']).toEqual('stack');
    });

    it('accesses the zeroth index value in the array', function() {
      expect(arrayObject[0]).toEqual(5);
    });

    it("sets the property 'twoTimes' to a function that multiplies its parameter by 2", function() {
      expect(arrayObject.twoTimes(4)).toEqual(8);
      expect(arrayObject['twoTimes'](123)).toEqual(246);
    });
  });
});

/* Functions are also Objects! Functions and Arrays
have the same features as Object Literals. You can add properties to them, 
pass them to functions as arguments, and return them as values from functions.
*/

describe('Properties on a Function Object', function() {
  var functionObject;

  beforeEach(function() {
    functionObject = function() {
      return 'I am a function object, all functions are objects! Function can have their own properties too!';
    };

    setProps.setPropsOnFunc(functionObject);
  });

  describe('the function `functionObject`', function() {
    it('returns the proper string the `functionObject` function returns declared in the beforeEach Function above', function() {
      expect(functionObject()).toEqual(
        'I am a function object, all functions are objects! Function can have their own properties too!'
      );
    });
  });

  describe('the function `setPropsOnFunc`', function() {
    it('sets year to 20??', function() {
      expect(functionObject.year).toEqual('20??');
    });

    it('sets `divideByTwo` to a function that accepts a number and returns the value divided by two ', function() {
      expect(functionObject.divideByTwo(6)).toEqual(3);
    });
  });
});
