import axios from "axios";
import React, { useEffect, useState } from "react";
import './ListOfArticlesStyle.css';

function ListOfArticles() {
    const [categories, setCategories] = useState([])
    const getCategories = () => {
        axios.get('https://api.chucknorris.io/jokes/categories').then(res => setCategories(res.data))
    }
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div className="categories">
            {categories.map((item: any) => <button className="Button-categories" type="button">{item}</button>)
            }
        </div>
    )

}
export default ListOfArticles;