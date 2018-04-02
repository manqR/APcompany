import React, { Component } from 'react';
import Background from './img/line.png';

class ClientTxt extends Component {
    render() {
        const styleWrap = {
            maxWidth: '100%',
            margin: '0px auto'
        }
        const styleViewport= {
            width: '100%',
            overflow: 'hidden', 
            position: 'relative',
            height: '416px'
        }
        const styleBxslider= {
            width: 'auto',
            position: 'relative',
            transitionDuration: '0s',
            transform: 'translate3d(0px, -416px, 0px)'
        }
        const styleSitem= {
            float: 'none',
            listStyle: 'none',
            position: 'relative', 
            width: '438px'
        }
        const styleDirection = {
            backgroundImage: `url(${Background})`
        }
       
        return (
            <section className="clients2">
                <div className="row" style={{marginTop:'1vw'}}>
                    <div className="content span12 col-lg-12 col-md-12 col-sm-12 col-xs-12 clearfix">
                        <div className="section-wrapper">
                            <div className="textrotate">
                                <div className="bx-wrapper">
                                    <div className="bx-viewport">
                                        <ul className="bxslider" id="jb-bxslider-wrap-159">
                                            
                                            <li className="bxslider-sitem">
                                           
                                                <h3 className="bxslider-item-title">
                                                    <a href="#" className="title">Cable Media</a>
                                                </h3>   
                                                <h4 className="bxslider-item-posted-date">
                                                    Written on -
                                                    Monday, 21 March 2016 06:07							  	
                                                </h4>
                                                <p className="bxslider-item-para">                                  	
                                                Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.Curabitur blandit… <br/>
                                                </p>
                                                  
                                            </li>
                                            <li className="bxslider-sitem">
                                             
                                                <h3 className="bxslider-item-title">
                                                    <a href="#" className="title">Leading Lubricants Companies</a>
                                                </h3>
                                                
                                                <h4 className="bxslider-item-posted-date">
                                                    Written on -
                                                    Monday, 15 February 2016 07:55							  	
                                                </h4>
                                              
                                                <p className="bxslider-item-para">                                  	
                                                Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.Curabitur blandit… <br/>
                                                </p>
                                                 
                                            </li>
                                            <li className="bxslider-sitem">
                                              
                                                <h3 className="bxslider-item-title">
                                                    <a href="#" className="title"> International Helmet Manufacturerx</a>
                                                </h3>
                                                 
                                                <h4 className="bxslider-item-posted-date">
                                                    Written on -
                                                    Tuesday, 05 April 2016 16:03							  	
                                                </h4>
                                               
                                                <p className="bxslider-item-para">                                  	
                                                Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.Curabitur blandit… <br/>
                                                </p>
                                                  
                                            </li>
                                            <li className="bxslider-sitem">
                                              
                                                <h3 className="bxslider-item-title">
                                                    <a href="#" className="title">
                                                    World Leading Home Furniture Company</a>
                                                </h3>  
                                                <h4 className="bxslider-item-posted-date">
                                                    Written on -
                                                    Tuesday, 05 April 2016 15:51							  	
                                                </h4>
                                               
                                                <p className="bxslider-item-para">                                  	
                                                Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.Curabitur blandit… <br/>
                                                </p>
                                                    
                                            </li>
                                            <li className="bxslider-sitem">
                                              
                                                <h3 className="bxslider-item-title">
                                                    <a href="#" className="title">Cable Media</a>
                                                </h3>
                                            
                                                <h4 className="bxslider-item-posted-date">
                                                    Written on -
                                                    Monday, 21 March 2016 06:07							  	
                                                </h4>
                                              
                                                <p className="bxslider-item-para">                                  	
                                                Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.Curabitur blandit… <br/>
                                                </p>
                                                
                                            </li>
                                            <li className="bxslider-sitem">
                                                
                                                <h3 className="bxslider-item-title">
                                                    <a href="#" className="title">
                                                    Leading Lubricants Companies</a>
                                                </h3>
                                                
                                                <h4 className="bxslider-item-posted-date">
                                                    Written on -
                                                    Monday, 15 February 2016 07:55							  	
                                                </h4>
                                                
                                                <p className="bxslider-item-para">                                  	
                                                Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.Curabitur blandit… <br/>
                                                </p>
                                               
                                            </li>
                                            <li className="bxslider-sitem">
                                                
                                                <h3 className="bxslider-item-title">
                                                    <a href="#" className="title">
                                                    International Helmet Manufacturer</a>
                                                </h3>
                                                
                                                <h4 className="bxslider-item-posted-date">
                                                    Written on -
                                                    Tuesday, 05 April 2016 16:03							  	
                                                </h4>
                                                
                                                <p className="bxslider-item-para">                                  	
                                                Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.Curabitur blandit… <br/>
                                                </p>
                                                   
                                            </li>
                                            <li className="bxslider-sitem">
                                                
                                                <h3 className="bxslider-item-title">
                                                    <a href="#" className="title">
                                                    World Leading Home Furniture Company</a>
                                                </h3>
                                                <h4 className="bxslider-item-posted-date">
                                                    Written on -
                                                    Tuesday, 05 April 2016 15:51							  	
                                                </h4>
                                                <p className="bxslider-item-para">                                  	
                                                    Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.Curabitur blandit… <br/>
                                                </p> 
                                            </li>
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

export default ClientTxt;