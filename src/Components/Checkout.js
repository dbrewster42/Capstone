// import React, { useState } from "react";
// import { OrderContext } from "./Single";

// const value = useContext(Order);
// const Checkout = (value) => {
//   let [total, setTotal] = useState(0);
//   const image = value.picture;
//   console.log(value);
//   return (
//     <div>
//       <h2>Review your order</h2>
//       {value.map((item, i) => {
//         <div key={i} className="orders">
//           <img src={image} className="checkCover" alt="book cover" />
//           <h3>{item.title} </h3>
//           <p>
//             Author: <em>{item.author}</em>
//           </p>
//           <p>Quantity: {item.quantity}</p>
//           <p>
//             Price: <strong>{item.price * item.quantity}$</strong>
//           </p>
//         </div>;
//       })}
//       <div id="summary">
//         <h3>Order Summary</h3>
//         <p>Items: </p>
//         <p>Shipping and handling: $2.99</p>
//         <p>Pretax total: $</p>
//         <h2>Order total: $</h2>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
