/* eslint-disable no-extra-semi */
// NEAL DREHER 2019-07-14
/* eslint-disable no-unused-vars */
/*
### Vehicles: There are many different types of vehicles! 
In this problem, create a class `'Vehicle'` that accepts an array as an argument. 
The `'Vehicle'` class will return an object with the properties: 
    'wheelTotal', 'energySource', 'manufacturer', and 'isOn'. 
It will have additional access to a `'getSpec'` method that accepts a name of a 
property and returns the value at that property.

After the `'Vehicle'` class is created, create an additional class called:
     `'Tesla'`. The `'Tesla'` class will have all the properties as an instance 
     of `'Vehicle'`, with its own unique properties such as:
         'milesPerCharge', 'model', 'chargePercentage', and 'minutesToCharge'. 
    All instances of `'Tesla'` will have access to the `'minutesToFullCharge'` 
    method that calculates how long it will take the Tesla vehicle to reach 100 
    percent battery. (Note: the specs state the vehicle takes 100 minutes to 
    charge, and the vehicle in the specs starts at 50%, use the equation: 
    100 - chargePercentage to calculate the amount of minutes until a full charge, 
    don't complicate the equation for any other edge cases).

**Use ES2015 Class Syntax** Tip: Read the specs carefully!

TEST CONDITIONS:
Vehicle Class
    should set the vehicle's, wheelTotal, energySource, manufacturer and isOn 
        properties
    should have a function `getSpec` on its prototype
    `getSpec` accepts a key as an argument and returns the value associated with 
        that key from the object instance
Tesla
    should have properties specific to a Tesla - MPC (miles per charge) and Model
    should have all properties of a Vehicle instance
    assigns the prototype chain to inherit from Vehicle
    should have a `minutesToFullCharge` method that accepts the current charge 
        percentage and returns the estimated time until the battery is 100%
*/

class Vehicle {
    constructor([ wheelTotal, energySource, manufacturer ]) {
        this.wheelTotal = wheelTotal;
        this.energySource = energySource;
        this.manufacturer = manufacturer;
        this.isOn = false;
    };
    getSpec(aSpec) {
        if (typeof this[aSpec] === 'function') return undefined;
        return this[aSpec];
    };
}

class Tesla extends Vehicle {
    constructor([ milesPerCharge, model, chargePercentage, minutesToCharge, [ vehicleConstructor ]]) {
        super(vehicleConstructor);
        this.milesPerCharge = milesPerCharge;
        this.model = model;
        this.chargePercentage = chargePercentage;
        this.minutesToCharge = minutesToCharge;
    };
    minutesToFullCharge(currentChargePercentage) {
        return ((100 - currentChargePercentage)/100) * this.minutesToCharge +
            ` minutes until the charge is full!`;
    };
}
