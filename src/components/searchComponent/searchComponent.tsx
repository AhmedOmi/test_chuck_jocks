import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';

import './searchStyle.css';
function SearchComponent() {
    return (
        <form className="searchform group">
            <input type="search" placeholder="How can we make you laugh today?" className="search-input" id="search-box" />
            <button type="submit"><AiOutlineSearch /></button>
        </form>
    )
}

export default SearchComponent;