const BaseService = require('./base-service')
const Business = require('../models/business')
const BusinessDetails = require('../models/business-details')

class BusinessDetailService extends BaseService {

    async insert(category, practice, foodType) {
        const businessDetail = new BusinessDetails({ category, practice, foodType })
        return businessDetail.save()
    }
}

module.exports = new BusinessDetailService(BusinessDetails)