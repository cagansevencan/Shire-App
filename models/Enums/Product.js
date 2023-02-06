const BusinessDetails = require('./BusinessDetails');

class Product extends BusinessDetails {
    constructor() {
        super();
        this._categories = {
            Dairy: "Dairy",
            Beef: "Beef",
            FishSeafood: "Salmon",
            Poultry: "Poultry",
            Pork: "Pork",
            Lamb: "Lamb",
            Eggs: "Eggs"
        };
    }

    get categories() {
        return this._categories;
    }
}
module.exports = new Product();