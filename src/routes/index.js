const express = require('express');
const router = express.Router();
const pruebaControllers = require('../controllers/pruebaControllers');
const ServiceStation = require('../model/ServiceStation');

router.get('/', (req, res) => {
    res.render('partials/newStation');
});
router.get('/station', async (req, res) => {
    const notes = await ServiceStation.find();
    console.log('enviando...')
    res.send(notes)
});
router.post('/station/new', pruebaControllers.addServiceStation);

module.exports = router;