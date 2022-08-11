import React from "react";
import "./headerStyle.css";
import { FaUserAlt } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';
import SearchComponent from "../searchComponent/searchComponent";
function HeaderComponent() {
    return (
        <div className="header">
            <div className="header-navbar">
                <ul>
                    <li><a href="#">SO FUNKTIONIERT'S</a></li>
                    <li><a href="#">SONDERANGEBOTE</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropbtn">
                            <span className="userIcon">
                                <FaUserAlt />
                            </span>
                            MEIN BEREICH
                            <span className="arrowIcon">
                                <TiArrowSortedDown />
                            </span>
                        </a>
                        <div className="dropdown-content">
                            <a href="#">My published jokes</a>
                            <a href="#">My saved jokes</a>
                            <a href="#">Account Information</a>
                            <a href="#">Publish new joke</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="header-search-bg">
                <div className="search">
                    <h1>The Joke Bible</h1>
                    <p>Daily Laughs for you and yours</p>
                    <SearchComponent />
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;