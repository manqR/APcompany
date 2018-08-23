
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
            // textDecoration: 'underline',              
            textAlign: 'center',
            // paddingTop: '50px',
            position: 'absolute',
            width: '100%',
            bottom: 0,
            textAlign: 'center'
        }
        const styleDisplay = {
            display:'none'
        }
        return(
            <section className="team">
                <div style={styleTeam}>
                    <dd data="apadvocates-partner" className="partner" >                        
                        <span>
                            <h1 className="partner" style={styleDisplay}>Amir Rahmat Akbar Pane, SH.</h1>
                        </span>                        
                            <i className="partner" style={styleDisplay}> Managing Partner</i>                        
                              
                    </dd>
                    <dd className="partner">                        
                        <span>
                            <h1 className="partner" style={styleDisplay}>Aldi Andhika Jusuf, SH., MH.</h1>
                        </span>  
                        <i className="partner" style={styleDisplay}>Partner</i>
                                                  
                    </dd>    
                    <dd data="apadvocates-associate" className="associate" style={styleDisplay}>                       
                        <span>
                            <h1  className="associate" style={styleDisplay}>Rico Ricardo, SH.&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;</h1>                            
                        </span>                       
                        <i className="associate" style={styleDisplay}>Associate</i>                     
                            
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