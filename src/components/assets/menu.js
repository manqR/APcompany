import React, { Component } from 'react';
import { menuClick } from "./menuClick";
import { LanguageClick } from "./multilanguage";




const  handleClick = (url) => {
    LanguageClick(url);
};

let CurentUr = window.location.pathname;
let BASE_PATH_LANG = CurentUr.replace("/", "");
class Menu extends Component {
    constructor(){
        super();
        this.state = { data: [] };
    };    
    

    
    componentDidMount() {  
                
        let id = '';    
        if(BASE_PATH_LANG === ''){
            id = 'en';
        }else{
            id = BASE_PATH_LANG;
        }
        console.log('lang  '+id)
        this.mounted = true; 
        
        const BASE_URL = `https://apadvocates.com/administrator/api/menu-${id}`;
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
            const isMobile = window.innerWidth <= 700;
            
            if(isMobile){
                
                return <li key = {i} className="list-menu"><a onClick={() => handleClick(menus.link)}>{menus.name}</a></li>            
            }else{
                return <li key = {i} className="list-menu"><a href={menus.link} onClick={() => handleClick(menus.link)}>{menus.name}</a></li>            
            }
            
        });

        return (
            <ul className="nav navbar-nav menu">
                { Menus }     
            </ul>
        );
    }
}

export default Menu;