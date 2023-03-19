const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  // define your schema properties here
  make: { type: String, required: true },
  engine: {type: String, required: true},
  model: { type: String, required: true },
  drivetrain: {type: String, required: true},
  mileage: {type: String, required: true},
  transmission: { type: String, required: true},
  VIN: {type: String, required: true},
  exteriorColor: {type: String, required: true},
  year: { type: Number, required: true },
  seller: {type: String, required: true},
  contact: { type: Number, required: true},
  interiorColor: {type: String, required: true},
  location: {type:String, required: true},
  sellerCategory: {type: String, required: true},
  features: { type: String, required: true }
  
});

const Cars = mongoose.model('Cars', carSchema);

/*const newCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2022,
  price: 25000,
  imageUrl: 'https://example.com/toyota-corolla.jpg'
};

Cars.create(newCar)
  .then(car => console.log(car))
  .catch(err => console.error(err));*/


 /* async function findOneCar() {
    try {
      const car = await Car.findOne({ make: 'Toyota' });
      console.log(car);
    } catch (err) {
      console.error(err);
    }
  }*/


module.exports = mongoose.model('Cars', carSchema);