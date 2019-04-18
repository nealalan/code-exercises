let place = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(place_c) {
    return innerFunction('New York State');

    function innerFunction(place_b) {
      let place_a = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        // => Fullstack HQ is at Planet Earth, United States, New York State, New York City
        return 'Fullstack HQ is at ' + place + ', ' + place_c + ', ' + place_b + ', ' + place_a;
      }
    }
  }
}

console.log("Fullstack HQ is at Planet Earth, United States, New York State, New York City = ");
console.log(fullstackHQ());
