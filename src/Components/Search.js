import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cart from "../images/cart.png"
// import data from "../data/books.json";
import ad from "../images/AD.jpg"

const Search = (props) => {
    const [item, setItem] = useState("");
    let [genre, setGenre] = useState("Sci-Fi")
    let [order, setOrder] = useState(props.order);
    let [auth, setAuth] = useState("")
    function getLength(order) {
        let len = 0
        for (let i = 0; i < order.length; i++) {
            len += order[i].quantity;
        }
        return len
    };
    let length = getLength(order);
    const changeSearch = (e) => {
        setItem(e.target.value);
    };
    const changeAuth = e => {
        setAuth(e.target.value)
    }
    //[e.target.name] instead of text
    // const submitSearch = (e) => {
    //     e.preventDefault();
    // };
    useEffect(() => {
        console.log(order)
        setOrder(order)
        // order.length = order.length;
    }, [order]);
    const changeGenre = e => {
        setGenre(e.target.value)
    }
    // const bookFilter = e => {
    //     setItem("");
    // }
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     order.length = order.length;
    // }, [order]);
    //  Object.values(p).includes(e.target.value)
    // useEffect(() => {
    //     const bookFilter = e => data.filter((p =>
    //         Object.values(p).includes(e.target.value))
    // }, [submitSearch]);
    // const new_products = products.filter(p =>
    //     Object.values(p).includes(input)
    // );
    return (
        <div id="searchBox">
            <Link to='/checkout'>Shopping Cart</Link><br />
            <button id="red">{length}</button><br></br>
            <img src={cart} alt="shopping cart icon" className="icon c" />
            {order.map(item => <p>{item.title}</p>)}<br></br>
            Search For Books By...
            {/* <form onSubmit={props.submitSearch}> */}
            <form onSubmit={props.bookFilter}>
                <input
                    type="text"
                    name="item"
                    onChange={changeSearch}
                    value={item}
                ></input>
                <input type="submit" className="filters" name="submit" value="Title" />

                {/* <button className="filters">Title</button> */}
                {/* {<button>
                    <img src={search} alt="search button" className="icon" />
                </button> */}
            </form>
            <form onSubmit={props.authFilter}>
                <input type="text" name="auth" onChange={changeAuth} value={auth}></input>
                {/* <button className="filters" name="submit">Author</button> */}
                <input type="submit" className="filters" name="submit" value="Author" />
                {/* button className="filters" onClick={props.bookFilter}>Author</button> */}
            </form>
            <p> Or filter by...</p >
            {/* <form onSubmit={props.bookFilter}> */}
            <form onSubmit={props.genreFilter}>
                <button className="filters">Genre</button>
                {/* <button className="filters" onClick={props.bookFilter}>Genre</button> */}
                <select name="genre" value={genre} onChange={changeGenre}>
                    <option value="scifi">Sci-Fi</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="classic">Classic</option>
                    <option value="horror">Horror</option>
                </select>
            </form>
            {/* {order.map(item => <p>{JSON.stringify(item)}</p>)} */}
            {order.length < 1 &&
                <img src={ad} id="ad" alt="ad"></img>}
        </div >
    );
};

export default Search;
