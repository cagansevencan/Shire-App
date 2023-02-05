const uuid = require('uuid');

class Business {
    constructor({ name, description, email, phone, location, website, hours, deliveryType, socialMedia, businessInfo, photos = [], dropOffLocations = [] }) {
        this.id = uuid.v4();
        this.name = name;
        this.description = description;
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.website = website;
        this.hours = hours;
        this.deliveryType = deliveryType;
        this.socialMedia = socialMedia;
        this.businessInfo = businessInfo;
        this.photos = photos;
        this.dropOffLocations = dropOffLocations;
    }



    static create({ id, name, description, email, phone, location, website, hours, deliveryType, socialMedia, businessInfo, photos = [], dropOffLocations = [], }) {
        const business = new Business({
            name,
            description,
            email,
            phone,
            location,
            website,
            hours,
            deliveryType,
            socialMedia,
            businessInfo,
            photos,
            dropOffLocations,
        })

        business.id = id

        return business
    }

}

module.exports = Business