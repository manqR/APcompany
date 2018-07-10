import React, { Component } from 'react';
import ProfilePict from './img/profile.jpg';



let CurentUr = window.location.href;
let BASE_PATH_LANG = CurentUr.replace("?", "");
    BASE_PATH_LANG = BASE_PATH_LANG.slice(-2);

class mobile extends Component {

    constructor(){
        super();
        this.state = { data: '' };
    };    

    componentDidMount() {   
        let id = '';    
        if(BASE_PATH_LANG === 'en' || BASE_PATH_LANG === 'id'){
            id = BASE_PATH_LANG;
        }else{
            id='en'
        }
        
        this.mounted = true;       
        const BASE_URL = `https://apadvocates.com/administrator/api/profile-${id}`; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ data: json[0].description}); 
                    
        });                   
    }

    componentWillUnmount() {
        this.mounted = false;
       
    }

    render() {
        const styleText ={
            textAlign: 'justify'
        }
        let profileText = '<h5>'+this.state.data+'</h5>';        
        function createMarkup() { return {__html: profileText}; };

        return (
            <article className="profileMob" style={{display: 'block'}}>
                <img src={ProfilePict} alt="profile"/>                
                <dd data="who-we-are">
                    <div dangerouslySetInnerHTML={createMarkup()} />            
                </dd>               
            </article>
        );
    }
}

export default mobile;

