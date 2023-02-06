class BusinessDetails {
    constructor(category, practices = [], product = []) {
        this.category = category;
        this.practices = practices;
        this.product = product;
    }
    static create({ category, practices = [], product = [] }) {
        const businessDetails = new BusinessDetails({
            category,
            practices,
            product
        })
        return businessDetails
    }
}
module.exports = BusinessDetails