import React from "react";
import ReactDOM  from "react-dom";
import './index.css';

const name= "Gracy";
const img1= "https://picsum.photos/200/300";
const img2= "https://picsum.photos/250/300";
const img3= "https://picsum.photos/300/300";
const links ="https://evarsity.srmist.edu.in/srmsip/";
const heading={
    color: "blue",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    margin: '30px',
    fontFamily: "'Aboreto', cursive",
  };


ReactDOM.render(
    <>
     <h1 style={heading}>Hello ! My name is {name} </h1> 

    <div className="imgs">
      <img src={img1} alt="Random images" />
      <img src={img2} alt="Random images" />
      <a href= {links} target="_grace" >
       <img src={img3} alt="Random images" />
      </a>
     </div>
    </>,
     document.getElementById("root")

);