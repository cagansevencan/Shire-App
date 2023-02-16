const { businessService } = require('../services');
const router = require('express').Router();
const Business = require('../models/business');
const Location = require('../models/location');
const flatted = require('flatted');

router.get('/', async (req, res) => {
    const businesses = await businessService.load();
    res.send(businesses);
})

router.get('/nearby', async (req, res) => {
    const { lat, lng } = req.query;

    const businesses = await Location.aggregate([
        {
            $geoNear: {
                near: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
                distanceField: "distance",
                maxDistance: 1000000,
                spherical: true
            }
        }

    ]
    )
    res.send(businesses);
})



router.post('/:userId/create', async (req, res) => {
    const { userId } = req.params;
    const { name, description, email, location,
        businessDetails, deliveryTypes } = req.body;

    try {
        const business = await businessService.addBusinessDetails(userId, name, description, email, location,
            businessDetails, deliveryTypes);
        res.send(business);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

module.exports = router;