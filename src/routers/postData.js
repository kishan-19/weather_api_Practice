const express = require('express');
const router = new express.Router();
const weatherModel = require("../models/weatherschema.js");

// put data in db
router.post('/weather/api', async (req, res) => {
  try {

    const weaterData = new weatherModel(req.body);
    const createapi = await weaterData.save();
    console.log(createapi);
    res.status(201).send(createapi);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});




module.exports = router;
