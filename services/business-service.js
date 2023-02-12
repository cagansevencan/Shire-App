const BaseService = require('./base-service')
const Business = require('../models/business')
const BusinessDetails = require('../models/business-details')

class BusinessService extends BaseService {

    async addBusinessDetails(businessId, category, practice, foodType) {
        const business = await this.find(businessId)
        const businessDetails = await this.model.businessDetailsService.insert({ category, practice, foodType })
        business.businessDetails = businessDetails
        await business.save()
        return businessDetails
    }

}

module.exports = new BusinessService(Business)