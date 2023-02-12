const fs = require('fs')
const flatted = require('flatted')


class BaseService {
    constructor(model) {
        this.model = model
    }

    save(objects) {
        return this.model.insertMany(objects)
    }

    load() {
        return this.model.find()
    }

    async insert(object) {
        const instance = await this.model.create(object)
        return instance
    }

    async removeBy(property, value) {
        const instance = await this.model.deleteOne({ [property]: value })
        return instance
    }

    async update(id, object) {
        const instance = this.model.findByIdAndUpdate(id, object)
        return instance;
    }

    async find(id) {
        return this.model.findById(id)
    }

    async findBy(property, value) {
        return this.model.find({ [property]: value })
    }

    async query(obj) {
        return this.model.find(obj)
    }
}

module.exports = BaseService