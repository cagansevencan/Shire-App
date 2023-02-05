const uuid = require('uuid');
const Business = require('./business')

class User {
    constructor({ name, surname, email, phone, favBusinesses = [], businessCreated = [] }) {
        this.id = uuid.v4();
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.favBusinesses = favBusinesses;
        this.businessCreated = businessCreated;
    }

    createBusiness(name, description, email, phone, location, website, hours, deliveryType, socialMedia, businessInfo, photos, dropOffLocations) {
        const business = Business.create({
            name, description,
            email, phone,
            location, website,
            hours, deliveryType,
            socialMedia, businessInfo,
            photos, dropOffLocations
        })


        this.businessCreated.push(business)
    }


    static create({ id, name, surname, email, phone, favBusinesses = [], businessCreated = [] }) {
        const user = new User({
            name,
            surname,
            email,
            phone,
            favBusinesses,
            businessCreated
        })

        user.id = id

        return user
    }
}

module.exports = User