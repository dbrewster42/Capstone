import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css"
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { CardElement } from '@stripe/react-stripe-js';

const Checkout = (props) => {

    let [total] = useState(0);
    let [order, setOrder] = useState(props.order);
    console.log(props);
    // const [stripe, setStripe] = useState(null);
    // useEffect(() => {
    //     if (window.Stripe) {
    //         setStripe(window.Stripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG'));
    //     }
    // }, []);
    // function checkout() {
    //     stripe.redirectToCheckout({
    //         mode: 'payment',
    //         lineItems: order.map((item, i) => ({
    //             price: item.stripePrice,
    //             quantity: item.quantity,
    //         })),
    //         successUrl: 'http://localhost:3000/thanks',
    //         cancelUrl: 'http://localhost:3000/',
    //     });
    // }
    function getOrder(order) {
        let tot = 0
        for (let i = 0; i < order.length; i++) {
            tot += order[i].price * order[i].quantity;
        }
        return tot
    };
    total = getOrder(order);
    console.log(total);
    const finalTotal = Math.round(100 * (total + 2.99) * 1.0825) / 100
    console.log(finalTotal);
    // const image = value.picture;
    console.log(order);
    const submitPurchase = e => {
        e.preventDefault();
        alert("Your purchase of " + finalTotal + " is completed");
        console.log(e);
        props.purchasedOrder();
    }
    const removeAll = () => {
        window.location = '/';
    }
    const removeBook = e => {
        console.log(e.target.value)
        const newOrder = [...order]
        newOrder.splice(e.target.value, 1)
        setOrder(newOrder);
    }
    return (
        // <Elements stripe={stripePromise}>
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
                {total ? <p>Shipping and handling: $2.99</p> :
                    <p>Shipping and handling: $0</p>}
                {total ? <p>Pretax total: ${Math.round(100 * (total + 2.99)) / 100} </p> :
                    <p>Pretax total: $0</p>}
                {total ? <h2>Order total: ${finalTotal}</h2> :
                    <h2>Order total: $0</h2>}
                <button className="rAll" onClick={removeAll}>Remove All Items</button>
            </div>
            <div id="form">
                <h3><Link to={`/`} className="link">Home</Link></h3>
                <h3 id="green">Complete Purchase</h3>
                <form onSubmit={(submitPurchase)}>
                    {/* <form> */}
                    <input type="text" placeholder="Full Name" /><br />
                    <input type="text" placeholder="Shipping Address" /><br />
                    <input type="text" placeholder="City, State, and Zip" /><br />
                    <input type="integer" placeholder="Credit Card Number" /><br />
                    <input type="submit" value="Purchase" />
                    {/* <input type="submit" value="Purchase" onClick={() => { checkout(); }} /> */}
                </form>
            </div>
        </div>
        // </Elements>
    );
};

export default Checkout;
