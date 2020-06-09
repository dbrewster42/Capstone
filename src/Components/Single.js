import React, { useState } from "react";
import data from "../data/books.json";
import {
  BrowserRouter as Router,
  Link,
  Route,
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

const Single = () => {
  const images = importAll(require.context("../images", false, /\.(jpe?g)$/));
  let id = useParams();
  let params = id.i;
  let book = data[params];
  console.log(book);
  // let [newBook, setNewBook] = useState({})
  let [quantity, setQuantity] = useState(1);
  function submitOrder() { }

  const handleBook = (e) => {
    // setToggle((prevToggle) => !prevToggle);
  };
  // const submitOrder = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value)
  //   newBook = [...book];
  //   setNewBook(...newBook, newBook.quantity = e.target.value)
  //   setOrder(...order, newBook)
  //   console.log(order)
  //   //   const OrderContext = React.createContext();
  //   //   ReactDOM.render(
  //   //     <OrderContext.Provider value={newBook}>
  //   //       <Checkout />
  //   //     </OrderContext.Provider>
  //   //   );
  // };

  // const handleChange = (e) => {
  //   setQuantity({ value: e.target.value });
  // };
  return (
    <div id="single">
      <Search />
      <img src={images[book.picture]} id="cover" alt="cover" />
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
        <form onSubmit={submitOrder}>
          Quantity
        <input
            type="text"
            name="quantity"
            id="quantity"
            onChange={event => setQuantity(event.target.value)}
            value={quantity}
          ></input>
          {/* <select name="quantity">
            {for (let i = 0; i<book.inventory; {
              <option selected value="scifi">{i}</option>
            }}
            </select> */}
          <br></br><br />
          <input type="submit" value="Add to Cart" id="purch"></input>
        </form>
      </div>
      <Link to={`/`}>Back</Link>
    </div>
  );
}
// export default orderContext(Single);
export default Single;
