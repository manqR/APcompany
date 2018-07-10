import React, { Component } from 'react';



let CurentUr = window.location.href;
let BASE_PATH_LANG = CurentUr.replace("?", "");
    BASE_PATH_LANG = BASE_PATH_LANG.slice(-2);

class ProfileTxt extends Component {
    constructor(){
        super();
        this.state = { data: '' };
    };    

    componentDidMount() {   
        let id = '';    
        if(BASE_PATH_LANG === 'en' || BASE_PATH_LANG === 'id'){
            id = BASE_PATH_LANG;
        }else{
            id='en'
        }
        
        this.mounted = true;       
        const BASE_URL = `https://apadvocates.com/administrator/api/profile-${id}`; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ data: json[0].description}); 
                    
        });                   
    }

    componentWillUnmount() {
        this.mounted = false;
       
    }

    render() {
        const styleText ={
            textAlign: 'justify'
        }
        let profileText = '<h6>'+this.state.data+'</h6>';        
        function createMarkup() { return {__html: profileText}; };

        return (
            <section className="profileTxt">
                <table>
                    <tbody>
                        <tr>
                            <td>                        
                                <div style={{margin:'10px'}} dangerouslySetInnerHTML={createMarkup()} />            
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

        );
    }
}

export default ProfileTxt;