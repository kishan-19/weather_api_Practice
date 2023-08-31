const express = require('express');
const router = new express.Router();
const weatherModel = require('../models/weatherschema');


router.get('/weather/api/:name/data/apidata/:temp', async (req, res) => {
    try {
        const fineName = req.params.name;
        const newTemp = req.params.temp;
        const updateTemp = await weatherModel.updateOne({ name: fineName }, {
            $set: {
                temp: newTemp
            }
        }, {
            new: true
        });
        if (updateTemp.modifiedCount == 0) {
            res.status(400).json({ cod: "400", message: "Can't update temp" });
        } else {
            res.status(200).json({ cod: "200", message: "update temp" });

        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});
module.exports = router;