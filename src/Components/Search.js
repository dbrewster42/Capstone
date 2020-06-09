import React, { useState } from "react";
import search from "../images/search.png"
import cart from "../images/cart.jpg"
import data from "../data/books.json";
import ad from "../images/AD.jpg"

const Search = (props) => {
    const [item, setItem] = useState("");
    const changeSearch = (e) => {
        setItem({ text: e.target.value });
    };
    //[e.target.name] instead of text
    const submitSearch = (e) => {
        e.preventDefault();
    };
    const bookFilter = e => data.filter(p =>
        Object.values(p).includes(e.target.value)
    );
    // useEffect(() => {
    //     const bookFilter = e => data.filter((p =>
    //         Object.values(p).includes(e.target.value))
    // }, [submitSearch]);
    // const new_products = products.filter(p =>
    //     Object.values(p).includes(input)
    // );
    return (
        <div id="searchBox">
            <p>Shopping Cart</p>
            <button id="red">0</button><br></br>
            <img src={cart} alt="shopping cart icon" className="icon c" /><br></br>
            Search For Books By...
            <form onSubmit={props.submitSearch}>
                <input
                    type="text"
                    name="item"
                    onChange={changeSearch}
                ></input>
                <button className="filters" onClick={bookFilter}>Title</button>
                {/* <button>
                    <img src={search} alt="search button" className="icon" />
                </button> */}
            </form>
            <input type="text" name="auth"></input>
            <button className="filters" onClick={bookFilter}>Author</button>
            <p>Or filter by...</p>
            <button className="filters" onClick={bookFilter}>Genre</button>
            <select name="input">
                <option selected value="scifi">Sci-Fi</option>
                <option value="fantasy">Fantasy</option>
                <option value="classic">Classic</option>
                <option value="horror">Horror</option>
            </select><br />

            <img src={ad} id="ad"></img>
        </div>
    );
};

export default Search;
