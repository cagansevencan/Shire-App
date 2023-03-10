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
        if (!user) throw new Error('User not found')

        location = await LocationService.insert(location)

        const newBusinessDetails = await BusinessDetails.create(
            businessDetails
        )

        //console.log(businessDetails)
        const business = await this.insert({
            name, description,
            email, location, businessDetails: newBusinessDetails,
            deliveryTypes
        })

        user.businessesCreated.push(business)
        await user.save()

        //return JSON.parse(CircularJSON.stringify(business))
        return business


    }

}

module.exports = new BusinessService(Business)