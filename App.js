import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = () => {
    return (
        <div className="header">
            <div className="Logo-container">
                <img src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000"
                    className="logo"
                    alt="header-logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card" >
            <h3>Meghna foods</h3>

        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search food" ></input>
                <button type="text">click here</button>
            </div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />

        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)



