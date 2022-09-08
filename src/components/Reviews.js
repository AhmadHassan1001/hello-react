import React, { useEffect, useState } from 'react'
import { Search } from 'react-bootstrap-icons';
import Review from './Review';
import { DropdownButton } from 'react-bootstrap';

import { ArrowUpCircleFill, ArrowDownCircleFill } from 'react-bootstrap-icons'

function Reviews(props) {
    const [filter, setFilter] = useState(0);
    const [searchText, setSearchText] = useState("");
    let filters = ["All ratings", "One star", "Two stars", "Three stars", "Four stars", "Five stars"]
    let tmpListReviews = [];
    for (let i in props.reviews) {
        tmpListReviews.push(<Review review={props.reviews[i]} />)
    }
    const [ListReviews, setListReviews] = useState(tmpListReviews);

    
    const handleSearch = (event) => {
        setSearchText(event.target.value);
        tmpListReviews = [];
        for (let i in props.reviews) {
            console.log(props.reviews[i]["content_html"].toLowerCase());
            if(props.reviews[i]["content_html"].toLowerCase().includes(searchText.toLowerCase())&&(filter==0||props.reviews[i]["rating"]==filter))
            tmpListReviews.push(<Review review={props.reviews[i]} />)
        }
        setListReviews(tmpListReviews);
    }

    return (
        <>
            <div className='reviews-query'>
                <div className='search-review'>
                    <input type="text" placeholder="Search reviews" value={searchText} onChange={handleSearch} />
                    <button onClick={()=>{
                        tmpListReviews = [];
                        for (let i in props.reviews) {
                            console.log(props.reviews[i]["content_html"].toLowerCase());
                            if (props.reviews[i]["content_html"].toLowerCase().includes(searchText.toLowerCase()) && (filter == 0 || props.reviews[i]["rating"] == filter))
                                tmpListReviews.push(<Review review={props.reviews[i]} />)
                        }
                        setListReviews(tmpListReviews);
                    }}><Search /></button>
                </div>
                <div className="dropdown">
                    <button className="dropdown-toggle-btn"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>{filters[filter]}</span>
                        
                        <span><ArrowDownCircleFill/></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item" onClick={()=>{setFilter(0)}}>All ratings</button></li>
                        <li><button className="dropdown-item" onClick={()=>{setFilter(5)}}>Five stars</button></li>
                        <li><button className="dropdown-item" onClick={()=>{setFilter(4)}}>Four stars</button></li>
                        <li><button className="dropdown-item" onClick={()=>{setFilter(3)}}>Three stars</button></li>
                        <li><button className="dropdown-item" onClick={()=>{setFilter(2)}}>Two stars</button></li>
                        <li><button className="dropdown-item" onClick={()=>{setFilter(1)}}>One star</button></li>
                    </ul>
                </div>
            </div>
            {ListReviews}
        </>
    )
}

export default Reviews