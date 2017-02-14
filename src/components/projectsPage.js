import React, { Component } from 'react';
import '../styles.css';
import { Link } from 'react-router';
//import {posts} from '../posts/posts'
const posts = require('../data/projects/projects.js');

class ProjectPage extends Component {
    constructor() {
      super();
      console.dir(posts);
    }
    render() {
        return <main><div className="posts">
            {posts.default.projectArray.map((object, i) => {
              return <ProjectListItem img={object.image} date={object.date} title={object.title} content={object.preview} id={i} key={i}/>;
            })}
            

        </div></main>
            ;
    }
}



class ProjectListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  imageStyle ={
      float:'left',
      width:'100px',
      marginRight: '40px'
  }
  render() {
    return (
       <article className="post">
           <img src={this.props.img} alt="Smiley face" style={this.imageStyle}/>
    <h2 className="post-title">
      <a href={"/project/" + this.props.id}>
         {this.props.title}
      </a>
    </h2>

    
    {this.props.content}</article>
    );
  }
}


export default ProjectPage;