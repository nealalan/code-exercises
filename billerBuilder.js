/*
Biller Builder
Write a function billerBuilder that takes the name of a state as a 
parameter. billerBuilder should return a new function that takes the 
price of an item and returns the correct final price of the item, given 
the following:

if NY, charge 3% for shipping and 4% for sales tax
if NJ, charge 5% for shipping and 6.625% for sales tax
*/

function billerBuilder(state) {
    switch (state) {
        case 'NY':
            return function(price) {
                let shipping = 1.03;
                let tax = 1.04;
                return price * shipping * tax;
            };
        case 'NJ':
            return function(price) {
                let shipping = 1.05;
                let tax = 1.06625;
                return price * shipping * tax;
            };
        default:
            return price => price;
    }
    // ALSO I LOVE THE SOLUTION
    // const generateBiller = (shipping, sales) => { return (pricet) => price * tax); }
    //     case 'Bernie':
    //         return generateBiller(1, 1.75);
}


let newYorkBiller = billerBuilder('NY');
console.log(newYorkBiller(100)); // => 107.12 (100 * 1.03 * 1.04)

let newJersBiller = billerBuilder('NJ');
console.log(newJersBiller(100)); // => 111.95625 (100 * 1.05 * 1.06625)
let unkBiller = billerBuilder('');
console.log(unkBiller(100));
