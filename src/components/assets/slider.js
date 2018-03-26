import React, { Component } from 'react';
import logo from './img/logo.png';

class Slider extends Component {
    render() {
        return (            
            <div>
                <article>
                    <section className="home">
                        <img src={ logo } alt="logo" className="logo-app"/>
                        <h1><b>AP Advocates</b><br/>
                            A proud Indonesian Intellectual Property Firm<br/>
                            that is committed to deliver world-class<br/>
                            Intellectual Property service.
                        </h1>
                    </section>

                    <section className="practice">
                        <table>
                            <tr>
                                <td>
                                    <h1>Practice</h1>
                                    <fieldset>
                                        <a data="practice/index.html">PRACTICE</a>
                                        <a data="practices/non-contentious-prosecution/index.html">NON-CONTENTIOUS (PROSECUTION)</a>
                                        <a data="practices/contentious-ip-litigationenforcement/index.html">CONTENTIOUS &#8211; IP LITIGATION/ENFORCEMENT</a>
                                        <a data="practices/technology-media-telecommunication/index.html">TECHNOLOGY, MEDIA &#038; TELECOMMUNICATION</a>
                                        <a data="practices/general-corporate/index.html">GENERAL CORPORATE</a>
                                        <a data="practices/arbitration-dispute-resolution-practice/index.html">ARBITRATION &#038; DISPUTE RESOLUTION PRACTICE</a>	    
                                    </fieldset>
                                </td>
                            </tr>
                        </table>
                    </section>
                </article>



                {/* RIGHT SIDE PRATICE */}
                <article>
                    <section className="home2">
                         <dt className="languange">
                            <a href="id"><span><img src="img/id.svg" className="language-img" alt="" /></span></a>
                            <a href="en"><span><img src="img/us.svg" className="language-img" alt="" /></span></a>
                        </dt>
                    </section>
                    <section className="shortcut">
                        <table>
                            <tr>
                                <td>
                                    <a href="#profile">Profile &rarr;</a>
                                    <h6>Specializes in Providing Services<br/>Accross The Entire Spectrum of IP</h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#practice">Practice &rarr;</a>
                                    <h6>Provide Legal Service Accross<br/>All Aspects of Indonesian<br/>Commercial &amp; Corporate Law</h6>
                                </td>
                            </tr>
                        </table>
                    </section>
                
                </article>
            </div>
                
        );
    }
}

export default Slider;