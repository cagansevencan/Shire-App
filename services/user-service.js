const BaseService = require('./base-service')
const User = require('../models/user')

class UserService extends BaseService {
    async findByName(name) {
        return this.findBy('name', name)
    }

    async addBusiness(userId, name, description, email, location, businessDetails,
        dropOffLocations, deliveryTypes) {

        const user = await this.find(userId)


        const business = await this.model.businessService.insert({ name, description })

        user.businessesCreated.push(business)
        await user.save()
        return business
    }

}

module.exports = new UserService(User)
