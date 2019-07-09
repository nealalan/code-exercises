/* eslint-disable no-unused-vars */

/*
### Macbooks

Laptops come in all different shapes, sizes, brands, names, etc! The initial task 
in this exercise is to create a Laptop Class that defines general properties and 
functions most Laptops have in common.

After the Laptop class is created, extend the Laptop class and create a Macbook 
Class that has all of the characteristics of a Laptop including the main Laptop 
methods. In addition to having the same characteristics of the Laptop Class, the 
Macbook Class will have specific properties of its own.

**Note: Class syntax should be used**

TEST CONDITIONS:
Laptop class
    is a Constructor Function
    should take a year and size as parameters
    should have a `checkSpecs` function on its prototype
Macbook class extends from Laptop
    is a Constructor Function
    should have the year, hd-size, and color
    extends the Laptop Class and should have the Macbook.prototype and Laptop.prototype objects in its prototype chain
    has access to the checkSpecs function located on the Laptop Class
*/

class Laptop {
    constructor(modelYear, hardDriveSize) {
        this.year = modelYear;
        this.hd = hardDriveSize;
    }
    checkSpecs() { return `Year: ${this.year}, HD: ${this.hd}`; }
}
class Macbook extends Laptop {
    constructor(modelYear, hardDriveSize, color) {
        super(modelYear, hardDriveSize);
        this.color = color;
    }
}
