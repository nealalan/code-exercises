/*
Taco Cat Inc.
You run an insanely profitable business making gourmet tacos for cats. 
Given an object that represents the inventory of your company, 
 - add a method 'currentInventory' to your object that returns the current 
    value of your company's inventory.
 - add a sale method that takes an order object, returns the price of the 
    order, updates the inventory of the purchased items, and adds the price 
    of the order to the company's cash property.

Heads up: This problem is a bit more involved than anything you'd see on an 
admissions assessment or interview. Besides being a fun challenge, it's 
intended to show how you can use objects and their methods to store and 
change state.
*/

let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },
  currentInventory: function() {
    let invTot = 0;
    // assume all objects are inventory categories
    for (let category in this) {
        if (typeof tacoCatInc[category] === 'object') {
            for (let item in tacoCatInc[category]) {
                //console.log(tacoCatInc[category]);
                invTot += tacoCatInc[category][item].cost * tacoCatInc[category][item].quantity;
            }
        }
    }
    return invTot;
  },
  sale: function(order) {
    let orderTotal = 0;
    //console.log(order);
    //
    //  could have used const orderItem = Object.entries(order);
    //  could have used const {category, item} = orderItem[i];  **SPREADING**
    //
    let categories = Object.keys(order);
    for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        let item = order[categories[i]];
        let itemCost = this[category][item].cost;
        // increment order total
        orderTotal += itemCost;
        // decrement o/h
        this[category][item].quantity--;
        // increment cash
        this.cash += itemCost;
    }
    return orderTotal;
  },
  cash: 0
};


// TEST CONDITIONS
console.log(tacoCatInc.currentInventory()); // => 1710

let order = {
  gourmetShell: 'hard treat shell',
  gourmetFishFilling: 'salmon'
};

tacoCatInc.sale(order); // => 7
tacoCatInc.sale(order); // => 7

tacoCatInc.gourmetFishFilling.tuna.quantity; // => 98
tacoCatInc.cash; // => 14

tacoCatInc.currentInventory(); // => 1696
