const BaseDatabase = require('./base-database')
const User = require('../models/user')

class UserDatabase extends BaseDatabase {
    async findByName(name) {
        return this.findBy('name', name)
    }

    async addBusiness(userId, name, description,) {
        const user = await this.find(userId)

        const business = await this.model.businessService.insert({ name, description })

        user.businessesCreated.push(business)
        await user.save()
        return business
    }

}

module.exports = new UserDatabase(User)
