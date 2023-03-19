import React  from "react";
import images from './images.png';




const Footer = () => {
  return (
    <div className="footer">    
        
         <img src = {images}  alt="Logo" />
        
      <div  className="container" >
        <p style={{marginBottom: "100px"}}>About Us
            <br />

            <br />Auctions simplified is you go to car auction website, that is reliable, secure and

            <br /> has the most desirable cars available in the country
        
        </p>
    </div>
    </div>
    
  );
};
export default Footer;