import React, { Component } from 'react';

class ProfileTxt extends Component {
    render() {

        console.log(this.props)
        const styleText ={
            textAlign: 'justify'
        }
        return (
            <section className="profileTxt">
                <table>
                    <tbody>
                        <tr>
                            <td>                        
                                <h6 style={styleText}>We are a law firm domiciled in Central Jakarta-Indonesia that specialized in corporate and commercial legal services as well as litigation and non-litigation services in Indonesian law. </h6>
                                <h6 style={styleText}>All partners, associates, and lawyers are graduates of the Indonesian Law Faculties and are qualified to practice law in Indonesia, as continuously seeks to develop the legal and specialized. skills of the lawyers by participating any legal professional development program or courses, in order to sharpen their legal skill and industries expertise. Through the collective expertise and wealth of experience of our partner, associates and lawyers, we ensure to provide the most appropriate legal solutions adjusted to its clients’ circumstances.</h6>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

        );
    }
}

export default ProfileTxt;