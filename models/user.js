const uuid = require('uuid');
const Business = require('./business')
const Location = require('./location')

class User {

    createdAt = new Date();
    businessesCreated = []
    favBusinesses = []

    constructor({ name, email, phone, location }) {
        this.id = uuid.v4();
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.location = new Location(location);
    }

    createBusiness(name, description, email, phone) {
        const business = Business.create({
            name, description,
            email, phone,
        })

        this.businessesCreated.push(business)

        return business;
    }

    favThisBusiness(business) {
        this.favBusinesses.push(business)
        business.favs.push(this)
    }


    static create = ({ name, email, phone, location }) => {
        const user = new User({
            name, email, phone,
            location
        })
        return user
    }
}

module.exports = User