const BaseService = require('./base-service')
const Location = require('../models/location')

class LocationService extends BaseService {
    async addLocation(location) {
        location = await this.insert({
            location
        })
        return location
    }
}

module.exports = new LocationService(Location)