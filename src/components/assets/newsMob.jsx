import React, { Component } from 'react';



let CurentUr = window.location.href;
let BASE_PATH_LANG = CurentUr.replace("?", "");
    BASE_PATH_LANG = BASE_PATH_LANG.slice(-2);



class NewsEvent extends Component {

    constructor(){
        super();
        this.state = { data: [] };
    };    

    componentDidMount() {        
        let id = '';    
        if(BASE_PATH_LANG === 'en' || BASE_PATH_LANG === 'id'){
            id = BASE_PATH_LANG;
        }else{
            id='en'
        }


        this.mounted = true;    
        const BASE_URL = `https://apadvocates.com/administrator/api/articles-${id}`; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ data: json});  
                     
        });                   
    }
    componentWillUnmount() {
        this.mounted = false;
    }

    render() {

        let showDesc = this.state.data.map((data,i) => `<li>${data.description}</li>`)
           
        showDesc = showDesc.toString();
        showDesc = showDesc.replace('>,<','><');       
        function createMarkup() { return {__html: showDesc}; };

        return (
            <article className="newsEventMob" style={{display: 'block'}}>                
                {/* <h1>News</h1>
                <ul>
                    <li>International Helmet Manufacturer</li>
                    <li>World Leading Home Furniture Company</li>
                    <li>Cable Media</li>
                    <li>Leading Lubricants Companies</li>
                    <li>Largest And Leading Automotive Manufacturers</li>
                    <li>Prominent Regional And Multinational Pharmaceutical Companies In Indonesia</li>
                    <li>Prominent Regional And Multinational Gold Jewellery Industry In Indonesia</li>
                    <li>Highly Regarded Multinational Consumer Goods Companies</li>
                    <li>Multinational And High Reputable Companies In The Fashion Industries</li>
                    <li>Online Retail Operation</li>
                    <li>World Leading Software Manufacturers</li>
                    <li>Major Provider Of Electronic And Traditional News And Business Information</li>
                    <li>One Of The World’s Largest Manufacturer Of Mobile Phones And Devices</li>
                    <li>World’s Largest Telecommunications Companies</li>
                </ul> */}

                <h1>Article</h1>
                <ul dangerouslySetInnerHTML={createMarkup()}>
                    
                </ul>
            </article>
        );
    }
}

export default NewsEvent;