const { businessService } = require('../services');
const router = require('express').Router();
const Location = require('../models/location');

router.get('/', async (req, res) => {
    const businesses = await businessService.load();
    res.send(businesses);
})


router.get('/nearby/', async (req, res) => {
    const { lat, lng } = req.query;
    // const lat = 35.271448302082476;
    // const lng = -120.66220283508301;
    if (lat === '0' && lng === '0') {
        return res.send([]);
    }

    const locations = await Location.aggregate([
        {
            $geoNear: {
                near: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
                distanceField: "distance",
                maxDistance: 100000,
                spherical: true
            }
        }
    ]
    )
    const locationIds = [...new Set(locations.map((l) => l._id))]


    //find businesses that have the nearest location
    const businesses = await businessService.findBy('location', { $in: locationIds });



    res.send(businesses);
})

router.get('/:businessID', async (req, res) => {
    const id = req.params.businessID
    const business = await businessService.find(id);

    if (!business) return res.status(404);
    res.send(business);
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