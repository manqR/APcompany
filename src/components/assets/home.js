
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
import Mobile from './mobile';
import PracticeMob from './practiceMob';
import ClientMob from './clientMob';
import TeamMob from './teamMob';
import NewsMob from './newsMob';


const Home = () => ({
    render(){
        const isMobile = window.innerWidth <= 700;
        let profile = [];
        let url = window.location.href.split('#');
      //  console.log(url[1]);

        if(isMobile){                   
            profile = [<PracticeMob />,<Mobile />, <TeamMob/>,<ClientMob/>, <NewsMob/>]

            // profile = profile.map(( profiles , i) =>{
            //     return <li class="mediaScroll">{profiles}</li>
            // })
        }
        return(
            <div>
                
                <Header/>
               

                 {/* BEGIN LEFT SIDE PRATICE */}
                <article>
                    <Slider />
                    
                    {profile}
                   

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