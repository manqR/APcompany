import React, { Component } from 'react';

class PracticeTxt extends Component {

    constructor(){
        super();
        this.state = { data: [] };
    };    

    componentDidMount() {            
        const BASE_URL = 'https://apadvocates.com/administrator/api/web/practice'; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ data: json });                         
        });                   
    }

    
    render() {
        const desc = this.state.data.map((descrip, i)=>{
            return  <dd key ={i} data={descrip.link} >
                       {descrip.description}
                    </dd>
        })
        return (
            <section className="practice practice2" >
                <span>
                    <span >
                        {desc}
                    </span>
                </span>
            </section>
        );
    }
}

export default PracticeTxt;