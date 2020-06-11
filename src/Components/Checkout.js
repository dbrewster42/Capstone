import React, { useState } from "react";
// import data from "../data/books.json";
import { Link } from "react-router-dom";
// import { Alert } from 'react-alert'

// const value = useContext(Order);
const Checkout = (props) => {
    let [total] = useState(0);
    let [order, setOrder] = useState(props.order);
    //     const getTotal = order => {
    //         order.map(item, => {
    //     total += item.price * item.quantity;
    // })
    //     }
    function getOrder(order) {
        let tot = 0
        for (let i = 0; i < order.length; i++) {
            tot += order[i].price * order[i].quantity;
        }
        return tot
    };
    total = getOrder(order);
    console.log(total);
    // const image = value.picture;
    console.log(order);
    const submitPurchase = e => {
        alert("Your purchase is completed");
        console.log(e);
        setOrder([]);
        // window.location.href = "/";
    }

    const removeBook = e => {
        console.log(e.target.value)
        const newOrder = order.splice(e.target.value, 1)
        setOrder(newOrder);
    }
    return (
        <div id="check">
            <div id="books">
                <h3 className="rev">Review Your Order</h3>
                {order.map((item, i) => {
                    return (
                        <div key={i} className="orders">
                            {/* <img src={image} className="checkCover" alt="book cover" /> */}
                            <h3>{item.title} </h3>
                            <p>
                                Author: <em>{item.author}</em>
                            </p>
                            <p>Quantity: {item.quantity}</p>
                            <p>
                                Price: <strong>${Math.round(100 * item.price * item.quantity) / 100}</strong>
                            </p>
                            <button onClick={removeBook} value={i}>Remove From Cart</button>
                        </div>);
                })}
            </div>
            <div id="summary">
                <h3 className="rev">Order Summary</h3>
                <p>Items: ${Math.round(100 * total) / 100}</p>
                <p>Shipping and handling: $2.99</p>
                <p>Pretax total: ${Math.round(100 * (total + 2.99)) / 100} </p>
                <h2>Order total: ${Math.round(100 * (total + 2.99) * 1.0825) / 100}</h2>
                {/* <h2>Order total: {(total + 2.99) * 1.0825}$</h2> */}
            </div>
            <div id="form">
                <h3><Link to={`/`} className="link">Back</Link></h3>
                <h3 id="green">Complete Purchase</h3>
                <form onSubmit={submitPurchase}>
                    <input type="text" placeholder="Full Name" /><br />
                    <input type="text" placeholder="Shipping Address" /><br />
                    <input type="text" placeholder="City, State, and Zip" /><br />
                    <input type="integer" placeholder="Credit Card Number" /><br />
                    <input type="submit" value="Purchase" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;
