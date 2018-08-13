import React, { Component } from 'react';


let CurentUr = window.location.href;
let BASE_PATH_LANG = CurentUr.replace("?", "");
    BASE_PATH_LANG = BASE_PATH_LANG.slice(-2);

class Articles extends Component {

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
        let showDesc = this.state.data.map((data,i) => `<span><dd><u>${data.description}</u></dd> </span>`)
           
        showDesc = showDesc.toString();
        showDesc = showDesc.replace('>,<','><');       
        function createMarkup() { return {__html: showDesc}; };
        return (
            <section className="news-articles news-articles2" id="articles">
                <dl>
                    <dl>
                        <h1>Articles</h1>
                        <fieldset dangerouslySetInnerHTML={createMarkup()}>                          
                        </fieldset>
                        <input type="hidden" className="cur"/>
                        <input type="hidden" className="page"/>
                        <div className="pagin"></div>
                    </dl>
                </dl>
            </section>
        );
    }
}

export default Articles;