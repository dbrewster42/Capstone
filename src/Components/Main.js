import React from "react";
import data from "../data/books.json";
import "./main.css";
// import "../images/mor.jpg";

// for (var i = 0; i < data.length; i++) {
//   var obj = data[i];
//   console.log("Name: " + obj.author + ", " + obj.title);
// }
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  console.log(images);
  return images;
}

const Main = () => {
    let [toggle, setToggle] = useState(false)
  //   console.log(data);
  //   const book = data.map((data) => {
  //     console.log(data.title);
  //     return (
  //       <div id="main">

  //       </div>
  const images = importAll(require.context("../images", false, /\.(jpe?g)$/));
  console.log(images);
  const handleBook = (e) => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    {toggle ? <Single /> :
        <div id="main">        
            {data.map((data, i) => {
                return (
                
                <div key={i} className="squares">
                    <img
                    src={images[data.picture]}
                    className="covers"
                    alt="book cover"
                    />
                    <h3 onClick={handleBook}>{data.title}</h3>
                    <p>
                    Author: <em>{data.author}</em>
                    </p>
                    <p>
                    Price: <strong>{data.price}$</strong>
                    </p>
                    <p>{data.inventory} left in stock</p>
                </div>
                );
            })}
            ;
        </div>
    }
  );
};

export default Main;
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';
//   import React from 'react';
// <Link to="/about">About</Link>
