import React, { Component } from 'react';

class Menu extends Component {
    render() {

        return (
            <ul className="nav navbar-nav menu">
                <li className="list-menu"><a href="#home">Home</a></li>
                <li className="list-menu"><a href="#profile">Profile</a></li>
                <li className="list-menu"><a href="#team">Our Team</a></li>
                <li className="list-menu"><a href="#practice">Area of Practice</a></li>
                <li className="list-menu"><a href="#clients">Clients</a></li>
                <li className="list-menu"><a href="#news">News & Articles</a></li>                
            </ul>
        );
    }
}

export default Menu;