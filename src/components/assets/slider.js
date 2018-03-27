import React, { Component } from 'react';
import Header from './header';
import Profile from './profile';
import ProfileTxt from './profile-txt';
import Team from './team';
import TeamTxt from './team-txt';

class Slider extends Component {
    render() {
        return (            
            <div>
                <Header/>


                 {/* BEGIN LEFT SIDE PRATICE */}
                <article>

                    <section className="home">                        
                        <h1><b>AP Advocates</b><br/>
                            A proud Indonesian Intellectual Property Firm<br/>
                            that is committed to deliver world-class<br/>
                            Intellectual Property service.
                        </h1>
                    </section>
                   
                    <Profile />
                    <TeamTxt />
                    
                </article>
                {/* END LEFT SIDE PRATICE */}




                {/* BEGIN RIGHT SIDE PRATICE */}
                <article>

                    <section className="home2">
                         <dt className="languange">
                           
                        </dt>
                    </section>

                    <ProfileTxt />
                    <Team />
                    
                </article>
                {/* END RIGHT SIDE PRATICE */}

            </div>
                
        );
    }
}

export default Slider;