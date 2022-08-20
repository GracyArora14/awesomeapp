import React from "react";
import ReactDom from "react-dom";

ReactDom.render(<React.Fragment>
    <h1>Netflix series list display</h1>
    <p>The list of series are:</p>
    <ol>
        <li>The Vampire Diaries </li>
        <li>Dark </li>
        <li>Computer </li>
        <li>Lets go </li>
        <li>Love </li>
    </ol>
   
</React.Fragment>

,document.getElementById("root"));
 