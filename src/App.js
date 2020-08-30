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
import NotFound from "./Components/NotFound"


function App() {
  const [newData, setNewData] = useState(data) 
  const [order, setOrder] = useState([]);
 
  let [book] = useState({})
  const reduceInventory = (book, quant) => {    
    for (let i = 0; i < order.length; i++) {
      if (order[i] == book) {
        console.log(i)
        var val = i;
        break;
      }
    }
    const newerOrder = [...order];
    newerOrder[val].quantity += quant;
    console.log("Got it")
    return setOrder(newerOrder);
  }

  const submitOrder = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.log(e.target.quantity.value, e.target.obj.value);        
    const id = e.target.obj.value
    const quant = parseInt(e.target.quantity.value)
    book = data[id];
    if (quant > book.inventory) {
      console.log("ALoha")
      alert("We do not have that many copies in inventory")
    }
    else {
      if (order.includes(book)) {
        console.log("HI GANG")
        reduceInventory(book, quant);
      }
      else {
        book.quantity = quant;
        // console.log(book.quantity, "1", book.inventory)
        // console.log(book);
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
            exact path="/book/:i"
            render={() => <Single submitOrder={submitOrder} order={order} data={newData} />}
          />;

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
