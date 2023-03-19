import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
//import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const URL = "http://localhost:9000/api/users/auth";
  const handleSubmit = async  (e) => {
    
        e.preventDefault() 

        const options = {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "Access Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            email,
            password
        }),

        };

        try{

            const response = await fetch(URL, options);

            if(response.ok) {

                alert("login successful");
                navigate("/Auctions");
                setIsLoggedIn(true);
               // window.localStorage("token", data.data);
            }

            else {
                alert("Invalid credentials");
            }

        }

        catch(error) {
            console.error("Error:", error);
        }

        };
  
       
  


  return (
    <div className="login">
      <Header isLoggedIn={isLoggedIn} />

      <div className="logincontainer">
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <br />
          <br />
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            />
            <label style = {{textAlign: "center"}} htmlFor="remember-me">Remember me</label>
          </div>
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>

      <Footer />
    </div>
  );

  }
export default Login;
