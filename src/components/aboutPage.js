import React, { Component } from 'react';
import '../styles.css';
import {Link} from 'react-router';

class AboutPage extends Component {
    render() {
        return <article className="page">
  <h1 className="page-title">About</h1>
  <p>This website is still under construction, come back soon!</p>
  <p>Always ready to learn and try new technologies or even implement them, I am passionate about electronics and coding as well as developing innovative and personal projects</p>
  <p>Serious and able to integrate fast in a working team, I am currently in my third and last year of study at Supélec. Its wide curriculum gives me an excellent background in multiple fields especially in IT, electronics and telecommunication.</p>
  </article>
            ;
    }
}

export default AboutPage;