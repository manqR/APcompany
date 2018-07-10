import React, { Component } from 'react';


let CurentUr = window.location.href;
let BASE_PATH_LANG = CurentUr.replace("?", "");
    BASE_PATH_LANG = BASE_PATH_LANG.slice(-2);

class PracticeTxt extends Component {

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
      
        let desc = this.state.data.map((txt, i) =>  `<dd data=${txt.link} class=${txt.link === 'practice' ? 'active' : ''}>${txt.description}</dd>`) ;

        desc = desc.toString();
        desc = desc.replace('>,<','><');
       // console.log(desc)
        function createMarkup() { return {__html: desc}; };
        return (
            <section className="practice practice2" >
                <span>
                    <span dangerouslySetInnerHTML={createMarkup()}>                       
                    </span>
                </span>
            </section>
        );
    }
}

export default PracticeTxt;