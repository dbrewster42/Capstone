import React from 'react';
import "./NotFound.css";
import "../images/books.jfif"
import "../images/images.jfif"
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div id="notFound">
            <h3>Sorry, but you are attempting to access a page that does not exist</h3>
            <h3><Link to={`/`} className="link">Home</Link></h3>
        </div>
    );
}

export default NotFound;