import React, { Component } from 'react';


let CurentUr = window.location.href;
let BASE_PATH_LANG = CurentUr.replace("?", "");
    BASE_PATH_LANG = BASE_PATH_LANG.slice(-2);

class ContactTxt extends Component {

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
            <section className="contact2" id="contact">
                <div id="informations-contact">
                    <h2>We are available 7/7</h2>
                    <h3>9:00 - 12:30 / 14:00 - 20:00</h3>
                    <span className="border"></span>
                    <div className="col-md-offset-1 col-md-10">
                        <div className="col-sm-3 col-xs-3">
                            
                            <h4>
                                <a id="map-location">
                                <span className="glyphicon glyphicon-map-marker"></span>
                                <br />
                                    Gedung Gondangdia Lama No. 25
                                </a>
                            </h4>
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            
                            <h4>
                                <a href="tel:+62213922232">
                                <span className="glyphicon glyphicon-phone-alt"></span>
                                <br />
                                    +62 21 392 2232
                                </a>
                            </h4>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            
                            <h4>
                                <a href="mailto:office@apadvocates.com">
                                <i className="glyphicon glyphicon-envelope"></i>
                                <br />
                                    office@apadvocates.com
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactTxt;