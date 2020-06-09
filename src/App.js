import React, { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import Single from "./Components/Single";
// import Search from "./Components/Search";
import Checkout from "./Components/Checkout";

function App() {
  const [order, setOrder] = useState([]);
  let [newBook, setNewBook] = useState({})
  let [book] = useState({})
  const submitOrder = (e, book) => {
    e.preventDefault();
    console.log(e.target.value)
    setNewBook(...book, newBook.quantity = e.target.value)
    setOrder(...order, newBook)
    console.log(order)
    //   const OrderContext = React.createContext();
    //   ReactDOM.render(
    //     <OrderContext.Provider value={newBook}>
    //       <Checkout />
    //     </OrderContext.Provider>
    //   );
  };
  // const orderCallback = order > {
  // }
  const linkClick = book => {
    setNewBook(book);
  }
  // const Single = linkClick => {
  //   // return book;
  // }

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          {/* <Route exact path="/" component={Main} render={linkClick = { linkClick }} /> */}
          <Route exact path="/" component={Main} />
          <Route path="/:i" component={Single} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
//  <Main />
// <Search />
/* <Route path="/checkout" component={Checkout} /> */
