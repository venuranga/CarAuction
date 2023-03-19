import React, { useState } from "react";
//import { useLocation } from "react-router-dom";
//import { Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignIn = () => {

  const [name ,setName] = useState('');
  const[NIC, setNIC] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
    
  /*const location = useLocation();
    const { from } = location.state || { from: {pathname: "/"}};

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isSignedIn, setIsSignedIn] = useState(false);*/



   /* const [userdata, setUserData] = useState({
      Name: "",
      NIC: "",
      model: "",
      drivetrain: "",
      mileage: "",
      transmission: "",
      VIN: "",
      exteriorColor: "",
      seller: "",
      contact: "",
      interiorColor: "",
      location: "",
      sellerCategory: ""
    });
  
    useEffect(() => {
      // Fetch data from the database
      fetch(`http://localhost:5000/api/cars/`)
        .then(response => response.json())
        .then(data => {
          // Update the state with the fetched data
          setData(data);
        });
    }, []);

   */
   
    const handleSignIn = async (e) => {
      e.preventDefault() 
      try{

        alert("Submitted");
         await axios.post("http://localhost:9000/api/users/", {
          name,
          NIC,
          email,
          mobileNo,
          password
           
         });

         navigate("/Auctions");

        // const SignedUp = true;
      }

      catch(e){
        console.log(e);
       // const SignedUp = false;
      }
       

    }
   
    /*const handleSignIn = () => {
        // sign-in logic here
        setIsSignedIn(true);
      };
    
      if (isSignedIn) {
        return <Navigate to={from} />;
      }*/







  return (
    <div className="signin">
        <Header />
<div className="signincontainer">
  <form  action = "POST" style ={{ alignItems: "center"}}>
      <h2>Sign In</h2>
      <br />
      <br />
      <label htmlFor="name">Name:</label>
      <input 
        type="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
          <br />
      <br />
      <label htmlFor="nic">NIC:</label>
      <input 
        type="NIC"
        id="NIC"
        value={NIC}
        onChange={(e) => setNIC(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input 
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
   
      <label htmlFor="mobileNo">Mobile No:</label>
      <input 
        type="mobileNo"
        id="mobileNo"
        value={mobileNo}
        onChange={(e) => setMobileNo(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input 
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <br />

      <button style ={{alignItems: "center", backgroundColor: "#27ac4f", color: " white", borderRadius: "20px" , padding: "3px", height: "30px", width: "80px" , border: " #27ac4f"}} onClick={handleSignIn}> <b> Sign In </b> </button>
      </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
