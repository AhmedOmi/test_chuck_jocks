import axios from "axios";
import React, { useState } from "react";
import icon from "../../assets/img/green-light-copy-2.png";
import './searchStyle.css';
function SearchComponent() {
    const rows = [];
    const [searchData, setSearchData] = useState<any>()
    const [searchText, setSearchText] = useState<any>();
    const handleInput = (e: any) => {
        const text = e.target.value
        setSearchText(text)
    }
    const getQuerySearch = (e: any) => {
        if (e.target.value.length > 2) {
            axios.get(`https://api.chucknorris.io/jokes/search?query=${e.target.value}`).then(res => { setSearchData(res.data.result) }).catch(err => console.log(err))
        }
    }

    const searchItemsCompnents = () => {
        if (searchData) {
            return <ul className="search_items">
                    {searchData && searchData.slice(0, 5).map((search: any) => {
                        return <li className="search_item"><img src={icon} alt="icon" />{search.id}</li>
                    })}
                </ul>
        }
        else{
            return <span></span>
        }
    }
    return (
        <div className="wrapper">
            <div className="search-input">
                <input type="search" placeholder="How can we make you laugh today?" onChange={handleInput} onKeyUp={getQuerySearch} id="search-box" />
                {searchItemsCompnents()}
            </div>
        </div>
    )
}

export default SearchComponent;