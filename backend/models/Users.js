const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        required:true
    },
    Email:{
        type:String, unique: true,
        required:true
    },
    Mobile_No:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
});


const Users = mongoose.model('Users', userSchema);




/*const newUser = {
    Name: 'Toyota',
    NIC: '45454',
    Email: "abc@email.com",
    Mobile_No: 25000,
    Password: '123456'
  };
  
  Users.create(newUser)
    .then(Users => console.log(Users))
    .catch(err => console.error(err));*/




    module.exports = mongoose.model('Users', userSchema);