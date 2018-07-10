import React, { Component } from 'react';
import PracticeImg from './img/practice.jpg';


let CurentUr = window.location.href;
let BASE_PATH_LANG = CurentUr.replace("?", "");
    BASE_PATH_LANG = BASE_PATH_LANG.slice(-2);

class PracticeMob extends Component {

    constructor(){
        super();
        this.state = {data:[] };
    };    

    componentDidMount() { 
        let id = '';    
        if(BASE_PATH_LANG === 'en' || BASE_PATH_LANG === 'id'){
            id = BASE_PATH_LANG;
        }else{
            id='en'
        }

        this.mounted = true;                 
        const BASE_URL = `https://apadvocates.com/administrator/api/practice-${id}`;
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ data:json });           
        });                   
    }

    componentWillUnmount() {
        this.mounted = false;
    }


    render() {

        let desc = this.state.data.map((txt, i) =>  `<dd data=${txt.link}>${txt.description}<center>* * *</center></dd>`) ;

        desc = desc.toString();
        desc = desc.replace('>,<','><');
       // console.log(desc)
        function createMarkup() { return {__html: desc}; };
        
        return (            
            <article className="practiceMob" style={{display:'block'}}>
                <img src={PracticeImg} alt="img"/>
                <h2>Practice</h2>
                <span dangerouslySetInnerHTML={createMarkup()}></span>
            </article>
        );
    }
}

export default PracticeMob;