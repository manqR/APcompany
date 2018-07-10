

import React, { Component } from 'react';


let CurentUr = window.location.href;
let BASE_PATH_LANG = CurentUr.replace("?", "");
    BASE_PATH_LANG = BASE_PATH_LANG.slice(-2);

class Practice extends Component {
    constructor(){
        super();
        this.state = { data: [] };
    };    

    componentDidMount() {
        let id = '';    
        if(BASE_PATH_LANG === 'en' || BASE_PATH_LANG === 'id'){
            id = BASE_PATH_LANG;
        }else{
            id='en'
        }
        this.mounted = true;            
        const BASE_URL = `https://apadvocates.com/administrator/api/practice-${id}`;
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
       

        return (
            <section className="practice">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h1>Practice</h1>
                                <fieldset>
                                {                                    
                                    this.state.data.map((items, i)=>{
                                        let cls = '';

                                        if(items.link === 'practice'){
                                            cls='active'
                                        }else{
                                            cls=''
                                        }
                                        return(
                                            <a key ={i} data={items.link} className={cls}>{items.practice.toUpperCase()}</a>
                                        )
                                    })
                                }
                                </fieldset>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
          
        );
    }
}

export default Practice;