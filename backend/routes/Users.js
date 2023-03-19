const express = require('express');
const User = require('../models/Users')
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const JWT_SECRET = "gfgsdfsdufdf56sd5f6d5()hhdj";

// Route to handle POST requests to create a new registration document in the database
router.post('/', async (req, res) => {

    try {
        const { name, NIC, email, mobileNo, password } = req.body;
        
  const encryptedPassword = await bcrypt.hash(password,10);
    
        const oldUser = await User.findOne({email});

        if(oldUser) {
        return   res.send({ error:  "User Exists" });
        }
        // Create a new registration document using the Registration model
        const user = new User({
          Name: name,
          NIC: NIC,
          Email: email,
          Mobile_No: mobileNo,
          Password: encryptedPassword
        });
    
        // Save the new registration document to the database
        const savedUser = await user.save();
    
        // Respond with the saved registration document as JSON
        res.json(savedUser);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
      }
    });

    router.post('/auth', async (req, res) => {

      const {   email,  password } = req.body;
        // Find the user with the specified NIC and password
        const user = await User.findOne({ email });
    
        // If no user is found, respond with an error message
        if (!user) {
          return res.status(401).json({ msg: 'Invalid credentials' });
        }

        if(await bcrypt.compare( password, user.password)) {
          const token = jwt.sign({}, JWT_SECRET);

          if (res.status(201)) {
            return res.json({ status: "ok", data: token});

          }

          else{
            return res.json({error: "error"});

          }
        }

        res.json({status: "error", error: "Invalid Password"});
    
    });
 
    
/*router.use((req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = decoded._id;
    next();
  });
});*/



router.get('/', (req,res) => {
    res.json({mssg: 'GET a new workout'})

});


/*
// Route to handle POST requests to authenticate a user

*/

module.exports = router;


/*
  const {name,NIC,email,mobileNo,password} = req.body

  const data = new user ( {
    name,
    NIC,
    email,
    mobileNo,
    password
  });


  await user.insertMany([data]) */