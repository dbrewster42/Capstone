import React from "react";
import pic from "../images/header.jpg";
import pic2 from "../images/books.jfif";
import pic3 from "../images/images.jfif";
import "../App.css"

const Header = () => {
  return (
    <div id="header">
      <img className="imgs" src={pic2} alt="books" />
      <img className="imgs im" src={pic} alt="books" />
      <img className="imgs" src={pic3} alt="books" />
      <h1 className="title">Doctor Maggoo's Book Emporium</h1>
    </div>
  );
};

export default Header;
