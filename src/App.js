import React, { useState } from "react";
import "./App.css";
import data from "./data/books.json";
import Main from "./Components/Main";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Single from "./Components/Single";
// import Search from "./Components/Search";
import Checkout from "./Components/Checkout";

// const stripePromise = 'pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG';
function App() {
  const [newData, setNewData] = useState(data)
  // console.log(data)
  const [order, setOrder] = useState([]);
  // const [id, setID] = useState(-1)
  // let [newBook, setNewBook] = useState({})
  let [book] = useState({})
  const submitOrder = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.log(e.target.quantity.value, e.target.obj.value);        
    const id = e.target.obj.value
    // console.log(data[id]);
    book = data[id];
    book.quantity = parseInt(e.target.quantity.value);
    console.log(book.quantity, "1", book.inventory)
    if (book.quantity > book.inventory) {
      alert("We do not have that many copies in inventory")
    }
    else {

      console.log(book);
      const newOrder = order;
      newOrder.push(book);
      // setNewBook(book);
      // console.log(newBook);
      setOrder(newOrder);
      console.log(order);
      const updatedItem = { ...book, inventory: book.inventory - e.target.quantity.value }
      console.log(updatedItem)
      const itemCopy = [...data]
      itemCopy.splice(id, 1, updatedItem)
      console.log(itemCopy)
      alert("Item Added!");
      setNewData(itemCopy);
    }
  };
  // useEffect(() => {
  //   setOrder(order)
  //   // order.length = order.length;
  // }, [order]);
  const purchasedOrder = (e) => {
    setOrder([]);
  }
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route
            exact path="/"
            render={() => <Main order={order} data={newData} />}
          // render={() => <Main order={order} id={id} />}
          />;

          <Route
            exact path="/checkout"
            render={() => <Checkout order={order} purchasedOrder={purchasedOrder} />}
          />;

          <Route
            exact path="/:i"
            render={() => <Single submitOrder={submitOrder} order={order} data={newData} />}
          />;


        </Switch>
      </div>
    </Router>
  );
}

export default App;

{/* <Elements stripe={stripePromise}>
<Route
  exact path="/checkout"
  render={() => <Checkout order={order} />}
/>;
</Elements> */}