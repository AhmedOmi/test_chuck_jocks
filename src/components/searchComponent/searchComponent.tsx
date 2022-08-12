import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import search from '../../assets/img/search-copy@2x.png';
import './searchStyle.css';
function SearchComponent() {
    return (
        <div className="wrapper">
            <div className="search-input">
                <input type="search" placeholder="How can we make you laugh today?" id="search-box" />
            </div>
        </div>
    )
}

export default SearchComponent;