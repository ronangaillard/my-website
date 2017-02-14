import React, { Component } from 'react';
import '../styles.css';
import {Link} from 'react-router';

class NavBar extends Component {
    render() {
        return <div>
           
                <header className="masthead">
                    <h3 className="masthead-title">
                        <Link to={'/'}>{'Ronan Gaillard'}</Link>
                        <small>&nbsp;&nbsp;&nbsp;<Link to={'/'} title="Blog">Blog</Link></small>
                        <small>&nbsp;&nbsp;&nbsp;<Link to={'/projects'} title="Projects">Projects</Link></small>
                        <small>&nbsp;&nbsp;&nbsp;<Link to={'/readings'} title="Reading">Readings</Link></small>
                        <small>&nbsp;&nbsp;&nbsp;<Link to={'/about'} title="About">About me</Link></small>
                    </h3>
                </header>

          
        </div>
            ;
    }
}

export default NavBar;