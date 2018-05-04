
import React from 'react';
import Header from './header';
import Slider from './slider';
import Profile from './profile';
import ProfileTxt from './profile-txt';
import Team from './team';
import TeamTxt from './team-txt';
import Practice from './practice';
import PracticeTxt from './practice-txt';
import Clients from './clients';
import ClientsTxt from './clients-txt';
import News from './news';
import Articles from './articles';


const Home = () => ({
    render(){
        return(
            <div>
                
                    <Header/>
               

                 {/* BEGIN LEFT SIDE PRATICE */}
                <article>
                    <Slider />
                    
                    <Profile />
                    
                    <TeamTxt />
                    
                    <Practice />

                    <Clients />

                    <News />
                    
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
                    
                    <PracticeTxt />

                    <ClientsTxt />
                    
                    <Articles />
                </article>
                {/* END RIGHT SIDE PRATICE */}

            </div>
        )
    }
})

export default Home;