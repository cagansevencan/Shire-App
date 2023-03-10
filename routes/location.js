const { locationService } = require('../services');
const router = require('express').Router();

router.get('/:locationID', async (req, res) => {
    const params = req.params
    const id = req.params.locationID
    const location = await locationService.find(id);

    if (!location) return res.status(404);
    res.send(location);
})

module.exports = router;