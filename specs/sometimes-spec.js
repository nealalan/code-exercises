/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('sometimes', () => {
  let myFunc;
  let add = (a, b) => {
    return a + b;
  };

  beforeEach(() => {
    spyOn(add, 'apply').and.callThrough(); // checking to see if Function.prototype.apply is called on the add function
    myFunc = sometimes(add);
  });

  it('should return a function object', () => {
    expect(typeof myFunc === 'function').toEqual(true);
  });

  it('should return the `add` functions (the function passed to sometimes) return value the first 3 times the function is invoked', () => {
    const outputArr = [];

    for (let i = 0; i < 3; i++) {
      outputArr.push(myFunc(2 + i, 3 + i));
    }
    expect(outputArr).toEqual([5, 7, 9]);
  });

  it("should return the string 'I do not know!' on the 4th time the function is invoked ", () => {
    const outputArr = [];

    for (let i = 0; i < 4; i++) {
      outputArr.push(myFunc(3 + i, 4 + i));
    }
    expect(outputArr).toEqual([7, 9, 11, 'I do not know!']);
  });

  it("each consecutive odd call returns the function's (the function passed to sometimes) return value", () => {
    const outputArr = [];
    let iDoNotk = 'I do not know!';

    for (let i = 0; i < 8; i++) {
      outputArr.push(myFunc(3 + i, 4 + i));
    }
    expect(outputArr).toEqual([7, 9, 11, iDoNotk, 15, iDoNotk, 19, iDoNotk]);
  });

  it("each consecutive even call returns 'I do not know'", () => {
    const outputArr = [];
    let iDoNotk = 'I do not know!';

    for (let i = 0; i < 9; i++) {
      outputArr.push(myFunc(3 + i, 4 + i));
    }
    expect(outputArr).toEqual([
      7,
      9,
      11,
      iDoNotk,
      15,
      iDoNotk,
      19,
      iDoNotk,
      23,
    ]);
  });

  it("uses '.apply' on the add function and passes it the 'arguments' object ", () => {
    /* 
    the `apply` method accepts two arguments:
    
     1. a "context object" (the object is assigned to the `this` keyword within the function `apply` is called on)
     2. an array - The array holds the arguments passed to the function apply is called on. e.g.
    
    function example(arg1, arg2, arg3, arg4) {
      console.log(arguments); // arguments is a value all function declarations have access to, it holds
      all the arguments passed to a function.
      
      console.log('arg1', arg1);
      console.log('arg2', arg2);
      console.log('arg3', arg3);
      console.log('arg4', arg4);
    }
    
    example.apply(null, ['ARG1', 'ARG2', 'ARG3', 'ARG4']);
    
    Notice, the value `null` is passed as the "context" value since we are not referencing the `this` keyword within the
    function example. We are primarily using `.apply` so we can pass an array of arguments to the `example` function.

    */

    /* 
      arrow functions do not have an "arguments" object
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments 
    */
    myFunc(5, 6);
    expect(add.apply).toHaveBeenCalled();
  });
});
