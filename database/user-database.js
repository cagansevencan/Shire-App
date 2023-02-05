const BaseDatabase = require('./base-database')

class UserDatabase extends BaseDatabase {
    constructor() {
        super(User)
    }
}

module.exports = new UserDatabase()