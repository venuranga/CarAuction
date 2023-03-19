import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const SellACar = () => {
  const [make, setMake] = useState('');
  const [engine, setEngine] = useState('');
  const [model, setModel] = useState('');
  const [drivetrain, setDrivetrain] = useState('');
  const [mileage, setMileage] = useState('');
  const [transmission, setTransmission] = useState('');
  const [VIN, setVIN] = useState('');
  const [exteriorColor, setExteriorColor] = useState('');
  const [year, setYear] = useState('');
  const [seller, setSeller] = useState('');
  const [contact, setContact] = useState('');
  const [interiorColor, setInteriorColor] = useState('');
  const [location, setLocation] = useState('');
  const [sellerCategory, setSellerCategory] = useState('');
  const [features, setFeatures] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{

        await  axios.post("http://localhost:9000/api/cars/", {
         make,
         engine,
         model,
         drivetrain,
         mileage,
         transmission,
         VIN,
         exteriorColor,
         year,
         seller,
         contact,
         interiorColor,
         location,
         sellerCategory,
         features
 
        });
 
     }
 
     catch(event) {
         console.log(event);
 
 
     }
    }



  const handleFileInputChange = (event)  => {
    event.preventDefault();
   

  };

  return (
    <div className="sellacar">
      <Header />

      <div className="sellacarcontainer">
        <form onSubmit={handleSubmit} /*</div>style = {{alignItems: "center"}} */>
          <div className="form-row">
          <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="make">Make</label>
              <input type="text" className="form-control" id="make" value = {make} placeholder="Enter Make" onChange={(e) => setMake(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="enging">Engine</label>
              <input type="text" className="form-control" id="engine" value = {engine} placeholder="Enter Engine" onChange={(e) => setEngine(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="model">Model</label>
              <input type="text" className="form-control" id="model" value = {model} placeholder="Enter Model" onChange={(e) => setModel(e.target.value)}/>
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="drivetrain">Drivetrain</label>
              <input type="text" className="form-control" id="drivetrain" value = {drivetrain} placeholder="Enter Drivetrain" onChange={(e) => setDrivetrain(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="mileage">Mileage</label>
              <input type="text" className="form-control" id="mileage" value = {mileage} placeholder="Enter Mileage" onChange={(e) => setMileage(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label style = {{marginRight: "30px"}} htmlFor="transmission">Transmission</label>
              <select id="transmission" className="form-control" value = {transmission} onChange={(e) => setTransmission(e.target.value)}  >
                <option value="" disabled selected>
                  Select transmission
                </option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="vin">VIN</label>
              <input type="text" className="form-control" id="vin" value = {VIN} placeholder="Enter VIN" onChange={(e) => setVIN(e.target.value)}/>
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="exteriorColor">Exterior Color</label>
              <input type="text" className="form-control" id="exteriorColor" value = {exteriorColor} placeholder="Enter Exterior Color" onChange={(e) => setExteriorColor(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="year">Year</label>
              <input type="text" className="form-control" id="year" value = {year} placeholder="Enter Year" onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="seller">Seller</label>
              <input type="text" className="form-control" id="seller" value = {seller} placeholder="Enter Seller" onChange={(e) => setSeller(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="contact">Contact No</label>
              <input type="text" className="form-control" id="contact" value = {contact} placeholder="Enter Contact No" onChange={(e) => setContact(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="interiorColor">Interior Color</label>
              <input type="text" className="form-control" id="interiorColor" value = {interiorColor} placeholder="Enter interiorColor" onChange={(e) => setInteriorColor(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label htmlFor="location">Location</label>
              <input type="text" className="form-control" id="location" value = {location} placeholder="Enter Location" onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <br />
              <br />
              <label  htmlFor="sellerCategory" >
                Seller Category
              </label>
              <select id="sellerCategory" className="form-control" value = {sellerCategory} onChange={(e) => setSellerCategory(e.target.value)}  >
                <option value="" disabled selected>
                  Select Seller Category
                </option>
                <option value="Private">Private</option>
                <option value="Dealership">Dealership</option>
              </select>
            </div>
       
          </div>
          <div className="form-group col-md-6">
            <br />
            <br />
            <label htmlFor="features">Features</label>
            <textarea className="form-control" id="features" value = {features} rows="4" placeholder="Enter features" onChange={(e) => setFeatures(e.target.value)} >
            </textarea>
          </div>
          <div className="form-group col-md-6">
            <br />
            <br />
            <label>
              Upload photos:
              <input type="file" name="photos" onChange={handleFileInputChange} multiple />
            </label>
            <br />
            <nr />
            <br />
            <button type="submit" className="btn btn-primary" onClick = {handleSubmit}> 
              <b>Submit</b>
              </button>

              </div>
              </form>
              </div>

              <Footer />
              </div>
            

  );

}

export default SellACar;
