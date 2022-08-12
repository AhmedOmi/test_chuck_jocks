import React from "react";
import "./headerStyle.css";
import { FaUserAlt } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';
import SearchComponent from "../searchComponent/searchComponent";
import shape from '../../assets/img/shape.png';
import path from '../../assets/img/path_2@2x.png'
function HeaderComponent() {
    return (
        <div className="header">
            <div className="header-navbar">
                <ul className="navbar">
                    <li><a className="nav-button" href="#">SO FUNKTIONIERT'S</a></li>
                    <li><a  className="nav-button" href="#">SONDERANGEBOTE</a></li>
                    <li>
                        <nav>
                            <label htmlFor="btn" className="button"><img className="icon" src={shape}/><a className="nav-button">MEIN BEREICH</a>
                                <img className="arrow" src={path}/>
                            </label>
                            <input type="checkbox" className="checkbutton" id="btn" />
                            <ul className="menu">
                                <li><a href="#">My published jokes</a></li>
                                <li><a href="#">My saved jokes</a></li>
                                <li><a href="#">Account Information</a></li>
                                <li><a href="#">Publish new joke</a></li>
                            </ul>
                        </nav>
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