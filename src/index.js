import React from "react";
import ReactDOM  from "react-dom";

const fname='Gracy Arora';
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();


ReactDOM.render(
    <>
    <h1>Hello ! My name is {fname}</h1>
    <p>The Curent Date is {currDate}</p>
    <p>The Curent Time is {currTime}</p>
    </>,
     document.getElementById('root')

);