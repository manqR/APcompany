import React, { Component } from 'react';
import { menuClick } from "./menuClick";


const  handleClick = (url) => {
    menuClick(url);
};

class Menu extends Component {
    constructor(){
        super();
        this.state = { data: [] };
    };    
    
    componentDidMount() {  
        this.mounted = true;          
        const BASE_URL = 'https://apadvocates.com/administrator/api/web/menu-items'; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ data: json });             
        });      
                       
    }
    componentWillUnmount() {
        this.mounted = false;
    }

    
    render() {  
        
        const Menus = this.state.data.map((menus, i) =>{
            return <li key = {i} className="list-menu"><a onClick={() => handleClick(menus.link)}>{menus.name}</a></li>            
        });

        return (
            <ul className="nav navbar-nav menu">
                { Menus }     
            </ul>
        );
    }
}

export default Menu;