import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Restaurantcard = () => {
    return (
        <div className="res-card" >

        </div>

    )

}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            //Restaurantcard
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header" >
            <div className="headerlogo">
                <img
                    className="logo"
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )

}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />

        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)



