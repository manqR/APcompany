import React, { Component } from 'react';


class Slider extends Component {
    render() {
        return (                        

            // <section className="home">                        
            //     <h1><b>AP Advocates</b><br/>
            //         A proud Indonesian Intellectual Property Firm<br/>
            //         that is committed to deliver world-class<br/>
            //         Intellectual Property service.
            //     </h1>
            // </section>
            <section className="home">              
            <div className="container-fluid no-padding">
                
                <div id="myCarousel" className="carousel slide" data-ride="carousel">                
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                    </ol>                          
                    
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="img/slider1.jpg" alt="Los Angeles" style={{width:'100%'}} />
                            <div className="carousel-caption">
                                <h3>Integrity</h3>
                                <p>Serving clients professionally to the best of our ability in the quest to protect the client's rights, adhering to strong moral and ethical principles</p>
                            </div>
                        </div>            

                        <div className="item">
                            <img src="img/slider2.jpg" alt="Chicago" style={{width:'100%'}} />
                            <div className="carousel-caption">
                                <h3>Loyalty</h3>
                                <p>Loyalty to both the clients and among the team.</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="img/slider3.jpg" alt="New york" style={{width:'100%'}} />
                            <div className="carousel-caption">
                                <h3>Trust</h3>
                                <p>Endeavour to be worthy of our client's and our partner's trust.</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="img/slider4.jpg" alt="New york" style={{width:'100%'}} />
                            <div className="carousel-caption">
                                <h3>Commitment</h3>
                                <p>Willing to provide our time and energy for the best legal services.</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="img/slider5.jpg" alt="New york" style={{width:'100%'}} />
                            <div className="carousel-caption">
                                <h3>Service Excellence</h3>
                                <p>Excellence in service is one of the core value that AP Advocates strive to exemplify through prompt, timely, thoughtful and accurate service to the clients.</p>
                            </div>
                        </div>
                    </div>          
                
                    {/* <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a> */}
                </div>
            </div>
            </section>

                
        );
    }
}

export default Slider;