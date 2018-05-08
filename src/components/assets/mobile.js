import React, { Component } from 'react';
import ProfilePict from './img/profile.jpg';

class mobile extends Component {
    render() {
        const styleText ={
            textAlign: 'justify'
        }
        return (
   
            <article className="profileMob" style={{display: 'block',overflow:'auto'}}>
                <img src={ProfilePict} alt="profile"/>
                <h2>Profile</h2>
                <dd data="who-we-are">
                    <h1>1. Who We Are</h1>
                    <div>
                    <h5 style={styleText}>We are a law firm domiciled in Central Jakarta-Indonesia that specialized in corporate and commercial legal services as well as litigation and non-litigation services in Indonesian law. </h5>
                    <h5 style={styleText}>All partners, associates, and lawyers are graduates of the Indonesian Law Faculties and are qualified to practice law in Indonesia, as continuously seeks to develop the legal and specialized. skills of the lawyers by participating any legal professional development program or courses, in order to sharpen their legal skill and industries expertise. Through the collective expertise and wealth of experience of our partner, associates and lawyers, we ensure to provide the most appropriate legal solutions adjusted to its clients’ circumstances.</h5>
                    </div>                    
                </dd>               
            </article>
           
        );
    }
}

export default mobile;

