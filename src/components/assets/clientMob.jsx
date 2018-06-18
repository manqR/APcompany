import React, { Component } from 'react';
import ClientImg from './img/clients1.jpg';

class ClientMob extends Component {
    render() {
        return (
            <article className="clientsMob" style={{display: 'block'}}>
                <img src={ClientImg} alt="client"/>
                <h1>Clients</h1>
                <ul>
                    <li>International Helmet Manufacturer</li>
                    <li>World Leading Home Furniture Company</li>
                    <li>Cable Media</li>
                    <li>Leading Lubricants Companies</li>
                    <li>Largest And Leading Automotive Manufacturers</li>
                    <li>Prominent Regional And Multinational Pharmaceutical Companies In Indonesia</li>
                    <li>Prominent Regional And Multinational Gold Jewellery Industry In Indonesia</li>
                    <li>Highly Regarded Multinational Consumer Goods Companies</li>
                    <li>Multinational And High Reputable Companies In The Fashion Industries</li>
                    <li>Online Retail Operation</li>
                    <li>World Leading Software Manufacturers</li>
                    <li>Major Provider Of Electronic And Traditional News And Business Information</li>
                    <li>One Of The World’s Largest Manufacturer Of Mobile Phones And Devices</li>
                    <li>World’s Largest Telecommunications Companies</li>
                </ul>
            </article>
        );
    }
}

export default ClientMob;