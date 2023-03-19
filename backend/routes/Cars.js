const express = require('express');
const Cars = require('../models/Cars');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
      const { make, engine, model, drivetrain, mileage, transmission, VIN, exteriorColor,year, seller,  contact, interiorColor, location, sellerCategory, features } = req.body;
  
      // Create a new registration document using the Registration model
      const car = new Cars({
        make:make,
        engine: engine,
        model: model,
        drivetrain: drivetrain,
        mileage: mileage,
        transmission: transmission,
        VIN: VIN,
        exteriorColor: exteriorColor,
        year: year,
        seller : seller,
        contact: contact,
        interiorColor: interiorColor,
        location: location,
        sellerCategory: sellerCategory,
        features: features
      });
  
      // Save the new registration document to the database
      const savedCars = await car.save();
  
      // Respond with the saved registration document as JSON
      res.json(savedCars);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

  router.get('/', async  (req, res) => {
    try {
      const car = await Cars.find();
      console.log(car);
      res.send(JSON.stringify(car));
    } catch (err) {
      console.log(err);
      res.status(500).send('Error retrieving Users from database');
    }
  });

  module.exports = router;