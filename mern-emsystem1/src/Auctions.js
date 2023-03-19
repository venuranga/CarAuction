import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Photo1 from "./Photo1.jpg";
import Photo2 from "./Photo2.jpg";
import Photo3 from "./Photo3.jpg";
import Photo4 from './Photo4.jpg';
import Photo5 from './Photo5.jpg';
import Photo6 from './Photo6.jpg';
import { useNavigate } from "react-router-dom";


const Auctions = () => {

const navigate = useNavigate();

const handlephoto1 = () =>{
    navigate("/CA1");

};
    return (
        <div className="auctions">
            <div> 

            <Header />

            </div>


      <div  style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '40px',  marginLeft: "150px", marginTop: "200px", marginRight: "150px"  }}>
      <img style = {{width: "350px", height: "200px"}} src= {Photo1} alt = "pic1" onClick={handlephoto1} label = "2022 Mercedes-Benz AMG GT Black Series" />
      <img style = {{width: "350px", height: "200px"}} src= {Photo2} alt = "pic2" />
      <img style = {{width: "350px", height: "200px"}} src = {Photo3} alt = "pic3" />
      <img style = {{width: "350px", height: "200px"}} src= {Photo4} alt = "pic4" />
      <img style = {{width: "350px", height: "200px"}} src= {Photo5} alt = "pic5" />
      <img style = {{width: "350px", height: "200px"}} src= {Photo6} alt = "pic6" />
      </div>

      
        <Footer />
        </div>


    );

}

export default Auctions;