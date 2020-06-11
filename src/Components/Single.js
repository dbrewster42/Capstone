import React, { useState } from "react";
// import data from "../data/books.json";
import {
  BrowserRouter as Router,
  Link,
  useParams
} from "react-router-dom";
import "./single.css";
import Search from "./Search";
// import { createContext } from "react";
// const orderContext = createContext();
// export default orderContext
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const Single = (props) => {
  const images = importAll(require.context("../images", false, /\.(jpe?g)$/));
  let id = useParams();
  let params = id.i;
  let data = props.data
  let book = data[params];
  console.log(book);
  let order = props.order;
  console.log(order);
  // let [newBook, setNewBook] = useState({})
  let [quantity, setQuantity] = useState(1);
  // const submitOrder = (e) => {
  //   e.preventDefault();
  // }

  // const handleBook = (e) => {
  //   // setToggle((prevToggle) => !prevToggle);
  // };
  // const submitOrder = (e) => {
  //   e.preventDefault();
  // }
  // else {
  //   console.log(e.target.value)
  //   newBook = [...book];
  //   setNewBook(...newBook, newBook.quantity = e.target.value)
  //   setOrder(...order, newBook)
  //   console.log(order)
  // }


  const handleChange = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div id="single">
      <Search order={order} />
      <div id="info">
        <h3>Title: {book.title} </h3>
        <p>
          Author: <em>{book.author}</em>
        </p>
        <p>Genre: {book.category}</p>
        <p>ISBN: {book.isbn}</p>
        <p>Publisher: {book.publisher}</p>
        <p>
          Price: <strong>{book.price}$</strong>
        </p>
        <p><u>{book.inventory}</u> left in stock</p>
        <form onSubmit={props.submitOrder}>
          Quantity
          <input
            type="text"
            name="quantity"
            id="quantity"
            onChange={handleChange}
            value={quantity}
          />
          <input type="hidden" value={params} name="obj" />
          {/* <select name="quantity">
            {for (let i = 0; i<book.inventory; {
              <option selected value="scifi">{i}</option>
            }}
            </select> */}
          <br></br><br />
          {/* <Link to="/"><input type="submit" value="Add to Cart" id="purch" /></Link> */}
          <input type="submit" value="Add to Cart" id="purch" />
        </form>
      </div>
      {/* <div>
        <Link to={`/`} className="link">Back</Link><br /> */}
      <img src={images[book.picture]} id="cover" alt="cover" />
    </div >
  );
}
export default Single;
