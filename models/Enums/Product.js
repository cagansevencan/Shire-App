class Product {
    constructor() {
        this._categories = {
            Dairy,
            Beef,
            FishSeafood,
            Pork,
            Fruit,
            Vegetables,
            Produce,
            Bread,
            Pastries,
            Cheese,
            Eggs,
            Juice,
            Coffee,
            Tea,
            Wine,
            FermentedFoods,
            Beer,
            OrganMeats,
            IceCream,
            Milk
        };
    }

    get categories() {
        return this._categories;
    }
}
module.exports = new Product();