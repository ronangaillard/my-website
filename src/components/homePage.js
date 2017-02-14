import React, { Component } from 'react';
import '../styles.css';
import { Link } from 'react-router';
//import {posts} from '../posts/posts'
const posts = require('../data/posts/posts.js');

class HomePage extends Component {
    constructor() {
      super();
      console.dir(posts);
    }
    render() {
        return <main>
          <p>Website under contruction...</p>
          <div className="posts">
            {posts.default.postArray.map((object, i) => {
              return <ArticleListItem date={object.date} title={object.title} content={object.preview} id={i} key={i}/>;
            })}
            

        </div></main>
            ;
    }
}



class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <article className="post">
    <h1 className="post-title">
      <a href={"/post/" + this.props.id}>
         {this.props.title}
      </a>
    </h1>

    <time dateTime={this.props.date} className="post-date">{this.props.date}</time>
    {this.props.content}</article>
    );
  }
}


export default HomePage;