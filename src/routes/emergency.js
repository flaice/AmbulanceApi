const express = require('express');
const router = express.Router();
const Emergency = require('../models/Emergency');

router.use(express.urlencoded({ extended: false }));
router.use(express.json())

router.post('/', async (req, res) => {

    const emergency = new Emergency({
        name: req.body.name,
        code: req.body.code,
        level: req.body.level

    });

    try {
        const savedObject = await emergency.save()
        res.json(savedObject)

    } catch (err) {
        res.json({ message: err });
    }

});

router.get('/', (req, res) => {
    console.log('hello');
    res.send('Hi')
})

module.exports = router;