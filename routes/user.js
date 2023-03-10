const { userService } = require('../services');
const router = require('express').Router();

router.get('/', async (req, res) => {
    const users = await userService.load();
    res.json(users);
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await userService.find(id);
    res.json(user);
})

router.post('', async (req, res) => {
    const user = await userService.insert(req.body);
    res.send(user);
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await userService.removeBy('_id', id);
    res.send(user);
})

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await userService.update(id, req.body);
    res.send(user);
})


module.exports = router;