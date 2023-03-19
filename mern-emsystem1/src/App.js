
import './App.css';
import React from 'react';
//import Header from './Header.js';
//import Footer from './Footer.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Auctions from './Auctions.js';
import SignIn from './SignIn';
import CA1 from './CA1';
import SellACar from './SellACar';
import Register from './Register';
import LogIn from './LogIn';



const App = () => {
  return (
 
    <div className='App'>
       <Router>
        
        <Routes>
        <Route exact path="/Auctions" element= {<Auctions />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path = "/CA1" element = {<CA1 />}/>
        <Route path = "/SellACar" element = {<SellACar />}/>
        <Route path = "/Register"  element ={<Register />}/>
        <Route path = "/LogIn" element = {<LogIn />} />
        </Routes>
      
  
    </Router>
  


  </div>

 
  );
};


export default App;

/*<button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>*/


      /*<input type="text" placeholder="Search" onChange={handleSearch} />*/



   /*
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' }}>
      <img src="photo1.jpg" alt="Photo 1" />
      <img src="photo2.jpg" alt="Photo 2" />
      <img src="photo3.jpg" alt="Photo 3" />
      <img src="photo4.jpg" alt="Photo 4" />
      <img src="photo5.jpg" alt="Photo 5" />
      <img src="photo6.jpg" alt="Photo 6" />
    </div>
    */



    //


    /* 
        

    <Auctions /> */






    //