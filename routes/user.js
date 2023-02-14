const { userService } = require('../services');
const router = require('express').Router();

router.get('/', async (req, res) => {
    const users = await userService.load();
    res.json(users);
})

router.post('', async (req, res) => {
    const user = await userService.insert(req.body);
    res.send(user);
})

module.exports = router;