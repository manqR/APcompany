import React, { Component } from 'react';



let CurentUr = window.location.pathname;
let BASE_PATH_LANG = CurentUr.replace("/", "");

class ProfileTxt extends Component {
    constructor(){
        super();
        this.state = { data: [] };
    };    

    componentDidMount() {   
        let id = '';    
        if(BASE_PATH_LANG === ''){
            id = 'en';
        }else{
            id = BASE_PATH_LANG;
        }
        this.mounted = true;       
        const BASE_URL = `https://apadvocates.com/administrator/api/profile-${id}`; 
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