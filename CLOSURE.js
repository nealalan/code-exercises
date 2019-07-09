
console.log('value calculated outside of function')
function sum() {
    const startingValue = Math.floor(Math.random() * 100) + 1;

    return function funcFromSum(num) {
        return num + startingValue;
    }
}

const calculateSum = sum();
console.log(calculateSum(22)); // same values
console.log(calculateSum(22));

console.log('value calculated inside of function')
function sum2() {

    return function funcFromSum(num) {
        const startingValue = Math.floor(Math.random() * 100) + 1;
        return num + startingValue;
    }
}

const calculateSum2 = sum2();
console.log(calculateSum2(22)); // different values
console.log(calculateSum2(22));

console.log('\nPlans with friends...')
function plans() {
    let currentPlans = "See a movie";

    return function planner (newPlans) {
        if (newPlans) {
            currentPlans = newPlans;
        }
    return currentPlans;
    }
}

let plansWithFriends = plans();
console.log(plansWithFriends());
console.log(plansWithFriends('Go to the beach'));
console.log(plansWithFriends());  // Still the new value!

console.log('\nPlans with friends... with sanity!')
function plans2() {

    let currentPlans = "See a movie";
    let changePlansCounter = 0;

    return function planner (newPlans) {
        console.log(`counter ${changePlansCounter}`);
        if (newPlans && changePlansCounter < 2) {
            currentPlans = newPlans;
            changePlansCounter++;
        }
        return currentPlans;
    }
}

const plansWithFriends2 = plans2();

console.log(plansWithFriends2('Go for a run'));
console.log(plansWithFriends2('Go hiking'));
console.log(plansWithFriends2('Play video games'));
