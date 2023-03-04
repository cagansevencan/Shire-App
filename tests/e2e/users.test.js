const app = require('../../index')
const request = require('supertest')(app)



test('creates a new user', async () => {
    const userToCreate = {
        name: 'John',
        email: 'john@gmail.com',
        phone: '123456789',
        location: '1234 Main St'
    }
    const response = await request
        .post('/users')
        .send(userToCreate)
        .expect(200)

    const passangerCreated = response.body
    expect(passangerCreated).toMatchObject(userToCreate)
    //match a mongoose array empty

    expect(passangerCreated).toEqual(expect.objectContaining({
        businessesCreated: expect.any(Array),
        favBusinesses: expect.any(Array)
    }))

});



