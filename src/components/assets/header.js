import React from "react";
import logo from './img/logo2.png';
import {LanguageClick} from './multilanguage'
import Menu from './menu';



const Header = () => ({
    render() {

        
        const navStyle = {
            background: 'rgba(204, 204, 204, 0)'
          };
        const mobLang = {
            display:'inline-block'
        }

        return (  
            <nav className="navbar navbar-default" style = {navStyle}>
                <div className="container-fluid">                    
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" id="menu" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#home"><img src={ logo } alt="logo" className="logo-app"/></a>
                        <a className="navbar-brand" href="#home"><img src={ logo } alt="logo" className="logo-app"/></a>
                    </div>                    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        
                        <Menu/>


                        <ul className="nav navbar-nav navbar-right">  
                        
                                
                            <li style={mobLang}><a href="?id"><span><img src="img/id.svg" className="language-img" alt="" /></span></a></li>
                            <li style={mobLang}><a href="?en"><span><img src="img/us.svg" className="language-img" alt="" /></span></a></li>
                        </ul>
                    </div>                    
                </div>                
            </nav>
        )
    }
        
})

export default Header;