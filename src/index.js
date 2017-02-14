import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from './components/aboutPage.js'
import ProjectsPage from './components/projectsPage'
import ReadingsPage from './components/readingsPage'
import { Router, Route, browserHistory } from 'react-router'
import App from './App';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <Route path="/about" component={AboutPage}/>
      <Route path="/projects" component={ProjectsPage}/>
      <Route path="/readings" component={ReadingsPage}/>
      </Route>
    </Router>,
  document.getElementById('root')
);
