import React, { Component } from 'react';
import Background from './img/line.png';


class News extends Component {

    constructor(){
        super();
        this.state = { data: [] };
    };    

    
    componentWillMount(){
        window.RenderSlideClient();
    }
    componentDidMount() {            
        const BASE_URL = 'https://apadvocates.com/administrator/api/web/news'; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ data: json });  
                     
        });                   
    }

    render() {

         const newsTxt = this.state.data.map((txt, i) =>{
            return (
                <li key = {i} className="bxslider-sitem">
                                           
                    <h3 className="bxslider-item-title">
                        <a href="" className="title">{txt.title}</a>
                    </h3>  
                    <p className="bxslider-item-para">{txt.description}</p>
                    
                </li>
           
            )
        })

        // const styleWrap = {
        //     maxWidth: '100%',
        //     margin: '0px auto'
        // }
        // const styleViewport= {
        //     width: '100%',
        //     overflow: 'hidden', 
        //     position: 'relative',
        //     height: '416px'
        // }
        // const styleBxslider= {
        //     width: 'auto',
        //     position: 'relative',
        //     transitionDuration: '0s',
        //     transform: 'translate3d(0px, -416px, 0px)'
        // }
        // const styleSitem= {
        //     float: 'none',
        //     listStyle: 'none',
        //     position: 'relative', 
        //     width: '438px'
        // }
        const styleDirection = {
            backgroundImage: `url(${Background})`
        }
        return (
            <section className="clients2">
                <div className="row" style={{marginTop:'1vw'}}>
                    <div className="content span12 col-lg-12 col-md-12 col-sm-12 col-xs-12 clearfix" style={{height:600}}>
                        <div className="section-wrapper">
                            <div className="textrotate">
                                <div className="bx-wrapper">
                                    <div className="bx-viewport">
                                        <ul className="bxslider" id="jb-bxslider-wrap-159">                                            
                                            {newsTxt}
                                        </ul>
                                    </div>
                                    <div className="bx-controls bx-has-controls-direction">
                                        <div className="bx-controls-direction" style={styleDirection}></div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        
                    </div>
                
                </div>
            </section>
        );
    }
}

export default News;