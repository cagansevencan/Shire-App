const BusinessDetails = require("./businessDetails");

class Category extends BusinessDetails {
    constructor() {
        this._categories = {
            Farm,
            Restaurant,
            FarmersMarket,
            GroceryStore,
            Bakery,
            Winery,
            Brewery,
            Cafe
        };
    }

    get categories() {
        return this._categories;
    }
}
module.exports = new Category();