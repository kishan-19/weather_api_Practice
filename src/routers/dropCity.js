const express = require('express');
const router = new express.Router();
const weatherModel = require("../models/weatherschema.js");

router.get('/weather/api/:name/data/apidata', async (req, res) => {
    try {
        const deleteName = req.params.name;
        const result = await weatherModel.deleteOne({ name: deleteName });
        if (result.deletedCount == 0) {
            res.status(400).json({ cod: "400", message: "Can't Delete Document" });
        } else {
            res.status(200).json({ cod: "200", message: "Delete Document" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;