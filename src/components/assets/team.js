
import React from 'react';
import logo from './img/logo2.png';

const Team = () => ({
    render(){


        const styleTeam = {
            paddingTop: '200px',
            width: '100%',            
            display: 'flex',
            justifyContent: 'space-around'
        }

        const styleFoot = {
            color: '#FFF',
            fontWeight: 'bold',
            textDecoration: 'underline',
            bottom: '0',            
            textAlign: 'center',
            paddingTop: '50px'
        }

        return(
            <section className="team">
                <div style={styleTeam}>
                    <dd >                        
                        <span>
                            <h1>Amir Rahmat Akbar Pane, SH.</h1>
                        </span>
                    </dd>
                    <dd>                        
                        <span>
                            <h1>Aldi Andhika Jusuf, SH., MH.</h1>
                        </span>                        
                    </dd>    
                    <dd>                       
                        <span>
                            <h1>Rico Ricardo, SH.&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;</h1>
                        </span>                       
                    </dd> 
                </div>
                <div className="foot" style={styleFoot}>
                    <p>Team</p>
                </div>
            </section>
        )
    }
})

export default Team;