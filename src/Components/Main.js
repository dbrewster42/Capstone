import React, { useState } from "react";
// import data from "../data/books.json";
import "./main.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
  // console.log(images);
  return images;
}

const Main = (props) => {
  //   let [toggle, setToggle] = useState(false);
  // console.log(props)
  // const [data, setData] = useState(props.data);
  let [data, setData] = useState(props.data)
  const images = importAll(require.context("../images", false, /\.(jpe?g)$/));
  // console.log(images);
  let order = props.order
  // setData(props.newData)
  console.log(data)
  const newData = []
  // const id = props.id


  const bookFilter = e => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.item.value);
    const input = e.target.item.value;
    // setItem("");

    titleDisplay(input);
  }
  const authFilter = e => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.auth.value);
    const input = e.target.auth.value;
    authDisplay(input);
  }
  const genreFilter = e => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.genre.value);
    const input = e.target.genre.value;
    genreDisplay(input);
  }
  const genreDisplay = input => {
    data.filter((p => {
      console.log(p.category)
      if ((p.category).includes(input)) {
        newData.push(p)
      }
      console.log(newData)
      setData(newData);
    }))
  };
  const authDisplay = input => {
    data.filter((p => {
      if ((p.author).includes(input)) {
        newData.push(p)
      }
      console.log(newData)
      setData(newData);
    }))
  };
  const titleDisplay = input => {
    data.filter((p => {
      // console.log("1", p.title, "2", input);
      // console.log(Object.values(p.title).includes(input))
      // console.log((p.title).includes(input))
      // const newData = []
      // console.log((p).includes(input))
      if ((p.title).includes(input)) {
        newData.push(p)
      }
      console.log(newData)
      setData(newData);
    }))
  };
  const reset = () => {
    window.location.href = "/";
  }
  const customStyle = {
    textDecoration: "line-through"
  }
  return (
    <div id="main">
      <Search bookFilter={bookFilter} authFilter={authFilter} genreFilter={genreFilter} order={order} reset={reset} />
      {data.map((book, i) => {
        return (
          <div key={i} className="squares">
            <img
              src={images[book.picture]}
              className="covers"
              alt="book cover"
            />
            {book.inventory ?
              <h3>  <Link to={`/${i}`}>{book.title}</Link>  </h3> :
              <h3 style={customStyle}>
                <Link to={`/${i}`}>{book.title}</Link>
              </h3>}
            <p>
              Author: <em>{book.author}</em>
            </p>
            <p>
              Price: <strong>{book.price}$</strong>
            </p>
            <p>{book.inventory} left in stock</p>
            {/* {id == i} ?
              (<p>{book.inventory - order[id].quantity} left in stock</p>)
              :
              (<p>{book.inventory} left in stock</p>) */}

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
