const BaseService = require('./base-service')
const Business = require('../models/business')
const BusinessDetails = require('../models/business-details')
const userService = require('./user-service')
const LocationService = require('./location-service')


class BusinessService extends BaseService {

    async addBusinessDetails(userId, name, description, email,
        location, businessDetails,
        deliveryTypes) {

        const user = await userService.find(userId)

        location = await LocationService.insert(location)

        console.log(location)


        businessDetails = await BusinessDetails.create(
            businessDetails
        )

        console.log(businessDetails)

        const business = await this.insert({
            name, description,
            email, location, businessDetails,
            deliveryTypes
        })
        console.log("This is Business: ", business)

        //business.businessDetails = businessDetails

        user.businessesCreated.push(business)

        await user.save()

        return business
    }

}

module.exports = new BusinessService(Business)