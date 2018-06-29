

import React, { Component } from 'react';



class Practice extends Component {
    constructor(){
        super();
        this.state = { data: [] };
    };    

    componentDidMount() {
        this.mounted = true;            
        const BASE_URL = 'https://apadvocates.com/administrator/api/web/practice'; 
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
                                        return(
                                            <a key ={i} data={items.link}>{items.practice.toUpperCase()}</a>
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