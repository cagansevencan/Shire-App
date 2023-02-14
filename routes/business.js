const { businessService } = require('../services');
const router = require('express').Router();

router.get('/', async (req, res) => {
    const businesses = await businessService.load();
    res.send(businesses);
})

router.post('/:userId/create', async (req, res) => {
    const { userId } = req.params;
    const { name, description, email, location,
        businessDetails, deliveryTypes } = req.body;

    const business = await businessService.addBusinessDetails(userId, name, description, email, location,
        businessDetails, deliveryTypes);
    res.send(business);

})

module.exports = router;