import React, { Component } from 'react';
import Background from './img/line.png';


class Contact extends Component {

    constructor() {
        super();
        this.state = {
          form: {
            nama:'',
            email: '',
            subject: '',
            body: '',
          }
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        e.persist();
        let store = this.state;
        store.form[e.target.name] = e.target.value;
        this.setState(store);
    }

    submitHandler(e) { 
        e.preventDefault();

        fetch("https://apadvocates.com/administrator/api/email", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
                nama:this.state.form.nama,
                email: this.state.form.email,
                subject: this.state.form.subject,
                body: this.state.form.body,
            })
        }).then( (response) => { 
            // console.log(response)
        });


        // fetch('https://apadvocates.com/administrator/api/email',
        // {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        //   },
        //   body: this.state.form
        // })

    //     console.log(this.state.form);

    // const searchParams = encodeURIComponent(this.state.form.nama) + '=' + encodeURIComponent(this.state.form.email);
    

    // console.log(searchParams)
    //     fetch('https://apadvocates.com/administrator/api/email', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         data: searchParams
    //     })

        // fetch('https://apadvocates.com/administrator/api/email', { 
        //   method: 'POST', 
        //   headers: { 'Accept' : 'application/json',
        //              'Content-Type': 'application/json' 
        //            }, 
        //   data: JSON.stringify(this.state.form) 

        // //   console.log(data)
        // }).then(function(response){
        //     console.log('a')
        // });
    }
    
   

    render() {
        
        const styleDirection = {
            backgroundImage: `url(${Background})`
        }
        // const styleBackground = {
        //     Background:'#7f8c8d'
        // }
        const { form } = this.state;
        return (
            <section className="contact">
               {/* <div className="row" style={{marginTop:'1vw'}}> */}
                        
                    <div id="contact-part">
                        <div id="contact-form" className="contact-section contact">
                            <div className="col-md-8 col-md-offset-2">
                                <h2>Get in touch</h2>
                                <h4>Submit an idea, a tip or simply say hello ?</h4>
                            </div>
                            <div className="col-md-10 col-md-offset-1">                            
                                <form role="form" id="formcontactus" onSubmit={this.submitHandler} className="contactForm" method="post">
                                    
                                    <div className="col-lg-6 col-xs-6">
                                        <div className="form-group">
                                            <input type="text" className="form form-control requiretop" placeholder="Full name" value={form.nama} onChange={this.changeHandler} name="nama"  />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-xs-6">
                                        <div className="form-group">
                                            <input type="email" className="form form-control email requiretop" placeholder="Email" name="email" value={form.email} onChange={this.changeHandler}/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-xs-12">
                                        <div className="form-group">
                                            <input type="text" className="form form-control requiretop" placeholder="Subject"  value={form.subject} onChange={this.changeHandler} name="subject" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-xs-12">
                                        <div className="form-group">
                                            <textarea rows="3" className="form textarea form-control requiretop" value={form.body} onChange={this.changeHandler} placeholder="Message" name="body"></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-large specsend">Send my message</button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                
               {/* </div> */}
            </section>
        );
    }
}

export default Contact;