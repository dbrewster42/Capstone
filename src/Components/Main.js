import React, { useState } from "react";
import data from "../data/books.json";
import "./main.css";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import Search from "./Search";

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
  //   let [toggle, setToggle] = useState(false);

  const images = importAll(require.context("../images", false, /\.(jpe?g)$/));
  console.log(images);
  //   const handleBook = (e) => {
  //     setToggle((prevToggle) => !prevToggle);
  //   };
  // useEffect(() => {
  //   const bookFilter = e => data.filter((p =>
  //     Object.values(p).includes(e.target.value))
  //   }, [submitSearch]);
  // submitSearch = e => {
  //   input
  // }
  return (
    // {toggle ? "<Single/>" :
    <div id="main">
      {/* <Search submitSearch={submitSearch} /> */}
      <Search />
      {data.map((book, i) => {
        return (
          <div key={i} className="squares">
            <img
              src={images[book.picture]}
              className="covers"
              alt="book cover"
            />
            {/* <h3 onClick={(props.linkClick}></h3> */}
            <h3 onClick={() => { return book }}>
              <Link to={`/${i}`}>{book.title}</Link>
            </h3>
            <p>
              Author: <em>{book.author}</em>
            </p>
            <p>
              Price: <strong>{book.price}$</strong>
            </p>
            <p>{book.inventory} left in stock</p>
          </div>
        );
      })}
;
    </div >
  );
};

export default Main;

//   import React from 'react';
// <Link to="/about">About</Link>

/* <Route exact path='/' render{props => (
    <Fragment>
        <Search />
    </Fragment>
)} */
