import axios from "axios";
import React, { useEffect, useState } from "react";
import { getEnabledCategories } from "trace_events";
import icon from "../../assets/img/green-light-copy-2.png";
import arrow from "../../assets/img/path@2x.png";
import './ListOfArticlesStyle.css';

function ListOfArticles() {
    const [categories, setCategories] = useState([])
    const [showCategories, setShowCategories] = useState(7)
    const [category, setCategory] = useState("")
    const [joke, setJoke] = useState<any>()

    const showMoreCategories = () => {
        setShowCategories((prevValue => categories.length))
    }
    const getCategories = () => {
        axios.get('https://api.chucknorris.io/jokes/categories').then(res => setCategories(res.data))
    }
    const getCategoriesJokes = (props: any) => {
        setCategory(props)
        axios.get(`https://api.chucknorris.io/jokes/random?category=${props}`).then(resp => setJoke(resp.data))
    }
    const getDetailsJoke = () => {
        console.log
    }
    const multipleJokes = () => {
        const rows = [];
        for (let i = 0; i < 6; i++) {
            {
                joke && 
                rows.push(
                    <div className="column">
                        <div className="card">
                            <h3 className="title"><img src={icon} alt="icon"/>No Title</h3>
                            <p className="paragraphe">{joke.value}</p>
                            <a href="#" ><h5>SEE STATS</h5><img src={arrow} alt="arrow"/></a>
                        </div>
                    </div>)
            }
        }
        return rows;
    }
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div>
            <div className="categories">
                {categories.slice(0, showCategories).map((item: any) => <button className="Button-categories" type="button" onClick={() => { getCategoriesJokes(item) }}>{item}</button>)}
                <button className="Button-categories view_button" type="button" onClick={showMoreCategories}> VIEW ALL</button>
            </div>
            {category && 
            <div className="category_title">
                <p>{category}</p>
            </div>}
            <div className="jokes_List">
                <div className="row">
                    {multipleJokes()}
                    <button type="button" className="view_button">View More</button>
                </div>
            </div>
        </div>
    )

}
export default ListOfArticles;