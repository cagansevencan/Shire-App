const uuid = require('uuid');
const BusinessDetails = require('./Enums/businessDetails');
const Location = require('./location');

class Business {

    website = '';
    location = new Location();
    createdAt = new Date()
    hours = '';
    socialMedia = '';
    photos = [];
    businessDetails = new BusinessDetails()
    dropOffLocations = [];
    deliveryTypes = []
    favs = [];

    constructor({ name, description, email, phone }) {
        this.id = uuid.v4();
        this.name = name;
        this.description = description;
        this.email = email;
        this.phone = phone;
    }


    static create = ({ name, description, email, phone }) => {
        const business = new Business({
            name, description,
            email, phone,
        })
        return business
    }

}

module.exports = Business