import './App.css';
import Image from "react-bootstrap/Image"; 
import "bootstrap/dist/css/bootstrap.css"; 
import React from "react"; 

function Header() {
  return (
    <div style={{  padding: 30 }}> 
    Sri Krishna International hotel
locationnear Havanoor circle, 3rd Stage 4th Block, West of Chord Road 3rd Stage, Basaveshwar Nagar, Bengaluru, Karnataka 560079, India

    <Image style={{ width: 500 }}
      src= "image1.jpg"
      rounded 
    /> 
    <Image style={{ width: 500 }}
      src= "image2.jpg"
      rounded 
    />  
  </div> 

  );
}

export default Header;
