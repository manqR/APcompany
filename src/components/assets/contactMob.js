import React, { Component } from 'react';



let CurentUr = window.location.href;
let BASE_PATH_LANG = CurentUr.replace("?", "");
    BASE_PATH_LANG = BASE_PATH_LANG.slice(-2);



class ContactMob extends Component {

    // constructor(){
    //     super();
    //     this.state = { data: [] };
    // };    

    // componentDidMount() {        
    //     let id = '';    
    //     if(BASE_PATH_LANG === 'en' || BASE_PATH_LANG === 'id'){
    //         id = BASE_PATH_LANG;
    //     }else{
    //         id='en'
    //     }


    //     this.mounted = true;    
    //     const BASE_URL = `https://apadvocates.com/administrator/api/articles-${id}`; 
    //     fetch(BASE_URL)
    //     .then(response => response.json())
    //     .then(json => {
    //         this.setState({ data: json});  
                     
    //     });                   
    // }
    // componentWillUnmount() {
    //     this.mounted = false;
    // }

    render() {

        // let showDesc = this.state.data.map((data,i) => `<li>${data.description}</li>`)
           
        // showDesc = showDesc.toString();
        // showDesc = showDesc.replace('>,<','><');       
        // function createMarkup() { return {__html: showDesc}; };

        const styleHeihgt = {
            padding: '5px',
        }
        return (
            <article className="contactMob" style={{display: 'block'}}>                
                <section className="contact">
               
                        
                    <div id="contact-part">
                        <div id="contact-form" className="contact-section contact">
                            <div className="col-md-8 col-md-offset-2">
                                <h2>Get in touch</h2>
                                <h4>Submit an idea, a tip or simply say hello ?</h4>
                            </div>
                            <div className="col-md-10 col-md-offset-1">                            
                                <form role="form" id="formcontactus"  className="contactForm" method="post">
                                    
                                    <div className="col-lg-6 col-xs-6">
                                        <div className="form-group">
                                            <input type="text" className="form form-control requiretop" placeholder="Full name" name="nama"  />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-xs-6">
                                        <div className="form-group">
                                            <input type="email" className="form form-control email requiretop" placeholder="Email" name="email" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-xs-12">
                                        <div className="form-group">
                                            <input type="text" className="form form-control requiretop" placeholder="Subject"  name="subject" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-xs-12">
                                        <div className="form-group">
                                            <textarea rows="3" className="form textarea form-control requiretop" placeholder="Message" name="body"></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-large specsend">Send my message</button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                
               
                </section>
                    
                <section className="contact2" id="contact">
                    <div id="informations-contact">
                        <h2>We are available 7/7</h2>
                        <h3>9:00 - 12:30 / 14:00 - 20:00</h3>
                        <br/>
                        <span className="border"></span>
                        <div className="col-md-offset-1 col-md-10" >
                            <div className="col-sm-12 col-xs-12" style={styleHeihgt}>
                                
                                <h4>
                                    <a id="map-location">
                                    <span className="glyphicon glyphicon-map-marker"></span>
                                    <br />
                                        Gedung Gondangdia Lama No. 25
                                    </a>
                                </h4>
                            </div>
                            <div className="col-sm-12 col-xs-12" style={styleHeihgt}>
                                
                                <h4>
                                    <a href="tel:+62213922232">
                                    <span className="glyphicon glyphicon-phone-alt"></span>
                                    <br />
                                        +62 21 392 2232
                                    </a>
                                </h4>
                            </div>
                            <div className="col-sm-12 col-xs-12" style={styleHeihgt}>
                                
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
                
            </article>
        );
    }
}

export default ContactMob;