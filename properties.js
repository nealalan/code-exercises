// note: you need define the parameters in the function if needed

function setPropsOnObj(inputObject) {
    inputObject['x'] = 7;
    inputObject['y'] = 8
    inputObject.onePlus = (x) => x +1;
}

function setPropsOnArr(inputArray) {
/*describe('the function `setPropsOnArr`', function() {
    it('sets the property `hello` to a function that returns the string `Hello!`', function() {
      expect(arrayObject.hello()).toEqual('Hello!');
    });*/
    inputArray.hello = (x) => "Hello!";
/*  it('sets the property `full` to stack (and we can use a string to access it)', function() {
      expect(arrayObject['full']).toEqual('stack');
    });*/
    inputArray['full'] = 'stack';
/*  it('accesses the zeroth index value in the array', function() {
      expect(arrayObject[0]).toEqual(5);
    });*/
    inputArray[0] = 5;
/*  it("sets the property 'twoTimes' to a function that multiplies its parameter by 2", function() {
      expect(arrayObject.twoTimes(4)).toEqual(8);
      expect(arrayObject['twoTimes'](123)).toEqual(246);*/
      inputArray.twoTimes = (x) => x * 2;
}

function setPropsOnFunc(inputFunction) {
/*    it('sets year to 20??', function() {
      expect(functionObject.year).toEqual('20??');
    });*/
    inputFunction.year = '20??';
    
/*  it('sets `divideByTwo` to a function that accepts a number and returns the value divided by two ', function() {
      expect(functionObject.divideByTwo(6)).toEqual(3);*/
    inputFunction.divideByTwo = (x) => x / 2;
}

module.exports = { setPropsOnObj, setPropsOnArr, setPropsOnFunc };
