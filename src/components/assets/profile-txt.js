import React, { Component } from 'react';

class ProfileTxt extends Component {
    constructor(){
        super();
        this.state = { data: [] };
    };    

    componentDidMount() {    
        this.mounted = true;       
        const BASE_URL = 'https://apadvocates.com/administrator/api/web/profile'; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ data: json });             
        });                   
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        const styleText ={
            textAlign: 'justify'
        }
        const description = this.state.data.map((desc, i) =>{
            return <h6 key = {i} style={styleText}>{desc.description}</h6>
        });
      
        return (
            <section className="profileTxt">
                <table>
                    <tbody>
                        <tr>
                            <td>                        
                                {description}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

        );
    }
}

export default ProfileTxt;