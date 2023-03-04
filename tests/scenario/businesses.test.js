const app = require('../../index')
const request = require('supertest')(app)



test('creates a new business', async () => {

    const userToCreate = {
        name: 'John',
        email: 'john@gmail.com',
        phone: '123456789',
        location: '1234 Main St'
    }


    const userResponse = await request
        .post('/users')
        .send(userToCreate)
        .expect(200)

    const businessToCreate = {
        name: "Johns Farm",
        description: "We sell fresh produce",
        email: "business1@gmail.com",
        phone: "1234567890",
        location: { "type": "Point", "coordinates": [-122.4194, 37.7749] },
        businessDetails: {
            "category": ["Farm"], "practice": ["Organic", "Sustainable"],
            "products": ["Fruits", "Vegetables"]
        },
        deliveryTypes: ["Pickup", "Delivery"]
    }


    const businessResponse = await request
        .post(`/businesses/${userResponse.body._id}/create`)
        .send(
            businessToCreate
        )
        .expect(200)

    const businessCreated = businessResponse.body

    expect(businessCreated).toMatchObject({
        name: 'Johns Farm',
        description: 'We sell fresh produce',
        location: { "type": "Point", "coordinates": [-122.4194, 37.7749] }
    });

});


