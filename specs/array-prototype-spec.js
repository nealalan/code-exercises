/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('Array.prototype.map', () => {
  it('concatenates "!!" to the end of every mapped value', () => {
    const numbersArr = [1, 2, 3];
    const stringArr = ['bear', 'owl', 'mouse', 'dog'];
    const mappedNumbersArr = numbersArr.map(val => val + 1);
    const mappedStringArr = stringArr.map(val => val.toUpperCase());

    expect(mappedNumbersArr).toEqual(['2!!', '3!!', '4!!']);
    expect(mappedStringArr).toEqual(['BEAR!!', 'OWL!!', 'MOUSE!!', 'DOG!!']);
  });

  it('calls Array.prototype.forEach', () => {
    spyOn(Array.prototype, 'forEach').and.callThrough();

    [5, 6, 7, 8].map(val => val + 1);

    expect(Array.prototype.forEach).toHaveBeenCalled();
  });
});

describe('Array.prototype.filter', () => {
  it('concatenates "#" to the front of every filtered value', () => {
    const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const stringArr = ['bear', 'owl', 'mouse', 'dog'];
    const mappedNumbersArr = numbersArr.filter(val => val % 2 === 0);
    const mappedStringArr = stringArr.filter(val => val.includes('o'));

    expect(mappedNumbersArr).toEqual(['#2', '#4', '#6', '#8']);
    expect(mappedStringArr).toEqual(['#owl', '#mouse', '#dog']);
  });
  it('calls Array.prototype.forEach', () => {
    spyOn(Array.prototype, 'forEach').and.callThrough();

    [5, 6, 7, 8].filter(val => val + 1);

    expect(Array.prototype.forEach).toHaveBeenCalled();
  });
});
