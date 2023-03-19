const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(express.urlencoded({extended: true}));
const user = require('./models/Users');


app.use(bodyParser.json());
app.use(cors());
const userRoutes = require("./routes/Users");
const carRoutes = require("./routes/Cars");



const PORT = process.env.PORT || 9000;
const URL = 'mongodb+srv://svenuranga:iamleVenu98%23@cluster0.n8pqomt.mongodb.net/CarAuctionDb?retryWrites=true&w=majority';

mongoose.connect(URL)
 .then(()=>{
    console.log("Connected")
 })

 .catch((err)=>{
    console.log('DB error',err)
 })

 app.use((req,res,next) =>{
  console.log(req.path, req.method)
  next()
 });

 app.use('/api/users', userRoutes);
 app.use('/api/cars', carRoutes);

  /*data.save((err, user) => {
    if (err) {
      // Handle errors
      console.error(err);
      res.status(500).send('Error saving user');
    } else {
      // Send a response back to the frontend indicating success
      res.status(200).send('User saved successfully');
    }
  });*/


 /* res.send(JSON.stringify(data));

  

})*/



 

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
});

/*app.use('/api', router)

router.get('/users',  (req, res) => {
    try {
      //const Users = await userModel.find();
      console.log(userModel);
      res.send(JSON.stringify(userModel));
    } catch (err) {
      console.log(err);
      res.status(500).send('Error retrieving Users from database');
    }
  });


  module.exports = router;

  */

/*app.get('/api/Cars', async (req, res) => {
    try {
        const Cars = await CarModels.find();
        console.log(Cars);
        res.send(JSON.stringify(Cars));
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving Cars from database');
    }*/

//'mongodb://127.0.0.1:27017/CarAuctionDb';



