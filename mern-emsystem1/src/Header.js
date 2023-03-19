import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
//import { useContext } from 'react';
import images from './images.png';
import userIcon from './user-icon.png';


const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");   

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/Auctions");
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSignIn = () => {
    console.log("Sign-in button clicked");
    navigate("/SignIn");
  };

  const handleLogIn = () => {
    console.log("Log-in button clicked");
    navigate("/LogIn");
  };

  const handleLogOut = () => {
    console.log("Log-out button clicked");
    setIsLoggedIn(false);
  };

  const handlesellacar = () => {
    navigate("/SellACar");
  };

  return (
    <div className= "header">
      <img src={images} alt="Logo" onClick={handleClick} />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />

      <Link style={{marginLeft: "100px"}} to="/Auctions">Auctions</Link>

      <div className="buttons">
        {isLoggedIn ? (
          <>
            <img src={userIcon} alt="User" />
            <button onClick={handleLogOut}><b>Log Out</b></button>
          </>
        ) : (
          <>
            <button onClick={handlesellacar}><b>Sell a car</b></button>
            <button onClick={handleSignIn}><b>Sign In</b></button>
            <button onClick={handleLogIn}><b>Log In</b></button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
