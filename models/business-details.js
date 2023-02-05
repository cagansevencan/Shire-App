const Practices = require('./Enums/Practices');
const Products = require('./Enums/Product');
const Category = require('./Enums/Category');

class BusinessDetails {
    constructor(category, practice = [], foodType = []) {
        this.category = category;
        this.practice = practice;
        this.foodType = foodType;
    }
}