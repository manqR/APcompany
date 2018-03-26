import React, { Component } from 'react';

class Menu extends Component {
    render() {


        return (
            <ul className="nav navbar-nav menu">
                <li className="list-menu"><a href="#home">Home</a></li>
                <li className="list-menu"><a href="#shortcut">Profile</a></li>
                <li className="list-menu"><a href="#portfolio_page">Our Team</a></li>
                <li className="list-menu"><a href="#contact_page">Area of Practice</a></li>
                <li className="list-menu"><a href="#contact_page">Clients</a></li>
                <li className="list-menu"><a href="#contact_page">News & Articles</a></li>                
            </ul>
        );
    }
}

export default Menu;