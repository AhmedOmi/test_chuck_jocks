import axios from "axios";
import React, { useEffect, useState } from "react";
import { getEnabledCategories } from "trace_events";
import './ListOfArticlesStyle.css';

function ListOfArticles() {
    const [categories, setCategories] = useState([])
    const [showCategories, setShowCategories] = useState(7)
    const [category, setCategory] = useState("")
    const [jokes, setJokes] = useState([])

    const showMoreCategories = () => {
        setShowCategories((prevValue => categories.length))
    }
    const getCategories = () => {
        axios.get('https://api.chucknorris.io/jokes/categories').then(res => setCategories(res.data))
    }
    const getCategoriesJokes = (props: any) => {
        setCategory(props)
        axios.get(`https://api.chucknorris.io/jokes/random?category=${props}`).then(resp => setJokes(resp.data))
    }
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div>
            <div className="categories">
                {categories.slice(0, showCategories).map((item: any) => <button className="Button-categories" type="button" onClick={() => { getCategoriesJokes(item) }}>{item}</button>)}
                <button className="Button-categories" type="button" onClick={showMoreCategories}> VIEW ALL</button>
            </div>
            <div className="jokes_List">
                <div className="category_title">
                    <p>{category}</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )

}
export default ListOfArticles;