import React, { useState, useEffect } from "react";
import Photo1 from './CA1/Photo1.jpg';
import Photo2 from './CA1/Photo2.jpg';
import Photo3 from './CA1/Photo3.jpg';
import Photo4 from './CA1/Photo4.jpg';
import Photo5 from './CA1/Photo5.jpg';
import Photo6 from './CA1/Photo6.jpg';
import Photo7 from './CA1/Photo7.jpg';
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const CA1 = () => {

    const [data, setData] = useState({
        make: "",
        engine: "",
        model: "",
        drivetrain: "",
        mileage: "",
        transmission: "",
        VIN: "",
        exteriorColor: "",
        year: "" ,
        seller: "",
        contact: "",
        interiorColor: "",
        location: "",
        sellerCategory: "",
      });



      /*.then(response => response.json())
      .then(data => {
        // Update the state with the fetched data
        setData(data);*/
    
      useEffect(() => {
        // Fetch data from the database           
        const fetchdata =  async () =>{
            const result = await fetch('http://localhost:9000/api/cars/')
            const jsonResult =  await result.json();

            if (result.ok) {
            setData(jsonResult);
            }
          }

          fetchdata();
      }, []);


    const endTime = new Date("2023-03-15T12:00:00Z");
    const timeLeft = Math.round((endTime - Date.now()) / 1000 / 60); 

        //const [data, setData] = useState(null);

        const navigate = useNavigate();
      
    const handleRegister = () => {
        navigate("/Register")

    }
 

return (

    <div className="CA1">
        <Header />
       <br />
       <br />
    
        <h2  style = {{marginLeft: "20px", color: "white"}}>
            <b> 2022 AMG GT Black Series </b> 
        </h2>
        <br />
        <p style = {{marginLeft: "40px"}}>
        <b>
            7 speed DCT, 4.0 V8, Magma Beam
        </b>
    </p>
    <div className="CA1container">
    <div className="CA1large">

    <img style = {{width: "750px" , height: "478px", marginTop: "40px", marginLeft: "50px", alignContent: "left"}}src = {Photo1} alt = "pic1" />
    </div>
    <div className= "CA1grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '10px',  marginLeft: "100px", marginTop: "40px", width: "100px", height: " 100px" }}>
      <img style = {{width: "250px", height: "150px"}} src= {Photo2} alt = "pic1" />
      <img style = {{width: "250px", height: "150px"}} src= {Photo3} alt = "pic2" />
      <img style = {{width: "250px", height: "150px"}} src = {Photo4} alt = "pic3" />
      <img style = {{width: "250px", height: "150px"}} src= {Photo5} alt = "pic4" />
      <img style = {{width: "250px", height: "150px"}} src= {Photo6} alt = "pic5" />
      <img style = {{width: "250px", height: "150px"}} src= {Photo7} alt = "pic6" />

      </div>

      </div>






      <div className="CA1info">
        <div className="CA1infocontainer">   
        <br />

      <h2 style ={{color: "black", marginLeft: "0px"}} >Bid Information</h2>
      <p style = {{marginLeft: "0px"}}  >Time Left: {timeLeft} minutes</p>
      <p>Bid Type: Online</p>
      <p>Bid Amount: $5000</p>
      <button style = {{backgroundColor: "#27ac4f" , color: "white", borderRadius: "20px", border: "#27ac4f " , height: "30px"}} onClick = {handleRegister}>   <b>  Register to Bid </b>  </button>
      <br />
      <br />
      </div>
      

      <h2>Vehicle Information</h2>
      <table>
        <tbody>
          <tr>
            <td>Make:</td>
            <td>{data.make}</td>
          </tr>
          <tr>
            <td>Engine:</td>
            <td>{data.engine}</td>
          </tr>
          <tr>
            <td>Model:</td>
            <td>{data.model}</td>
          </tr>
          <tr>
            <td>Drivetrain:</td>
            <td>{data.drivetrain}</td>
          </tr>
          <tr>
            <td>Mileage:</td>
            <td>{data.mileage}</td>
          </tr>
          <tr>
            <td>Transmission:</td>
            <td>{data.transmission}</td>
          </tr>
          <tr>
            <td>VIN:</td>
            <td>{data.vin}</td>
          </tr>
          <tr>
            <td>Exterior Color:</td>
            <td>{data.exteriorColor}</td>
          </tr>
          <tr>
            <td>Year:</td>
            <td>{data.year}</td>
          </tr>
          <tr>
            <td>Seller:</td>
            <td>{data.seller}</td>
          </tr>
         
          <tr>
            <td>Contact:</td>
            <td><a href={`tel:${data.contact}`}>{data.contact}</a></td>
          </tr>
          <tr>
            <td>Interior Color:</td>
            <td>{data.interiorColor}</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>{data.location}</td>
          </tr>
          <tr>
            <td>Seller Category:</td>
            <td>{data.sellerCategory}</td>
          </tr>
          <tr>
            <td>Features:</td>
            <td>{data.features}</td>
          </tr>

        </tbody>
      </table>
    </div>


      <Footer />



    </div>




);


};



export default CA1;

// 