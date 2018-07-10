import React, { Component } from 'react';
import Background from './img/line.png';


let CurentUr = window.location.href;
let BASE_PATH_LANG = CurentUr.replace("?", "");
    BASE_PATH_LANG = BASE_PATH_LANG.slice(-2);

class ClientTxt extends Component {

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
        
       
        const styleDirection = {
            backgroundImage: `url(${Background})`
        }
       
        let clientText = this.state.data;        
        function createMarkup() { return {__html: clientText.toUpperCase()}; };

        return (
            <section className="clients2">
                <div className="row" style={{marginTop:'1vw'}}>
                    <div className="content span12 col-lg-12 col-md-12 col-sm-12 col-xs-12 clearfix" style={{height:600}}>
                        <div className="section-wrapper">
                            <div className="textrotate">
                                <div className="bx-wrapper">
                                    <div className="bx-viewport">
                                        <div dangerouslySetInnerHTML={createMarkup()} />            
                                        {/* <ul className="bxslider" id="jb-bxslider-wrap-158">
                                            
                                           { 
                                               this.state.data.map((txt, i) =>{
                                                return (
                                                    <li key = {i} className="bxslider-sitem">
                                                                               
                                                        <h3 className="bxslider-item-title">
                                                            <a href="" className="title">{txt.title}</a>
                                                        </h3>  
                                                        <p className="bxslider-item-para">{txt.description}</p>
                                                        
                                                    </li>
                                               
                                                )
                                                })
                                            }
                                        </ul> */}
                                    </div>
                                    {/* <div className="bx-controls bx-has-controls-direction">
                                        <div className="bx-controls-direction" style={styleDirection}></div>
                                    </div> */}
                                </div>
                            </div>
                        
                        </div>
                        
                    </div>
                
                </div>
            </section>
        );
    }
}

export default ClientTxt;