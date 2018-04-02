import React from 'react';

const Practice = () => ({
    render(){
        return(
            <section className="practice">
                <table>
                    <tr>
                        <td>
                            <h1>Practice</h1>
                            <fieldset>
                                <a data="practice">PRACTICE</a>
                                <a data="non-contentious-prosecution">NON-CONTENTIOUS (PROSECUTION)</a>
                                <a data="contentious-ip-litigationenforcement">CONTENTIOUS &#8211; IP LITIGATION/ENFORCEMENT</a>
                                <a data="technology-media-telecommunication">TECHNOLOGY, MEDIA &#038; TELECOMMUNICATION</a>
                                <a data="general-corporate">GENERAL CORPORATE</a>
                                <a data="arbitration-dispute-resolution-practice">ARBITRATION &#038; DISPUTE RESOLUTION PRACTICE</a>	    
                            </fieldset>
                        </td>
                    </tr>
                </table>
            </section>
        )
    }
})

export default Practice;