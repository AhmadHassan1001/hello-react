import React, { useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom';


function UdemyNavBar() {
    const [searchText, setSearchText] = useState("");
    let navigate = useNavigate();
    const handleSearch = (event) => {
        setSearchText(event.target.value);
        console.log(searchText);
    }

    function search() {
        navigate({
            pathname: "/",
            search: createSearchParams({
                query: searchText
            }).toString()
        });

    }
    return (
        <div>
            <nav className="nav-main-big">
                <Link to='/'>
                    <img className="nav-logo ms-3 nav-el" src="/images/Udemy_logo.png" alt="logo"
                    />
                </Link>
                <a className="nav-link link-dark text-decoration-none m-3">Categories</a>
                <form action="" className="search-form">
                    <input className="search-input" type="text" placeholder="Search for anything" value={searchText} onChange={handleSearch} />
                    <button type="button" className="search-btn" onClick={search}><img
                        className="search-btn-img" src="/images/61088.png"
                        alt="search" /></button>
                </form>
                <a className="nav-link link-dark text-decoration-none m-3">Udemy
                    Business</a>
                <a className="nav-link link-dark text-decoration-none m-3">Teach on
                    Udemy</a>

                <button className="nav-btn login-btn">Log in</button>
                <button className="nav-btn signup-btn">Sign up</button>
                <button className="nav-btn language-btn"><img className="language-img"
                    src="/images/download.png" alt="lang" /></button>

            </nav>
            <nav className="nav-main-small justify-content-between">

                <Link to='/'>
                    <img className="nav-logo nav-el" src="/images/Udemy_logo.png" alt="logo"
                    />
                </Link>

                <button type="button" className="list-btn" onclick=""><img
                    className="search-btn-img" src="/images\485889.jpg" alt="search" /></button>
            </nav>
        </div>
    )
}

export default UdemyNavBar;