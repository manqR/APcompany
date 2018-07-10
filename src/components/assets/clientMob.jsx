import React, { Component } from 'react';
import ClientImg from './img/clients1.jpg';

let CurentUr = window.location.href;
let BASE_PATH_LANG = CurentUr.replace("?", "");
    BASE_PATH_LANG = BASE_PATH_LANG.slice(-2);

class ClientMob extends Component {
    constructor(){
        super();
        this.state = { data: '' };
    };    

    
    componentWillMount(){
        window.RenderSlideClient();
    }
    componentDidMount() {        
        let id = '';    
        if(BASE_PATH_LANG === 'en' || BASE_PATH_LANG === 'id'){
            id = BASE_PATH_LANG;
        }else{
            id='en'
        }


        this.mounted = true;    
        const BASE_URL = `https://apadvocates.com/administrator/api/clients-${id}`; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ data: json[0].description });  
                     
        });                   
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {

        let clientText = this.state.data;        
        function createMarkup() { return {__html: clientText.toUpperCase()}; };
        return (
            <article className="clientsMob" style={{display: 'block'}}>
                <img src={ClientImg} alt="client"/>
                <h1>Clients</h1>
                    <div dangerouslySetInnerHTML={createMarkup()} />     
            </article>
        );
    }
}

export default ClientMob;