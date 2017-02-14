import React, { Component } from 'react';
import '../styles.css';
import { Link } from 'react-router';
//import {posts} from '../posts/posts'
const readings = require('../data/readings/readings.js');

class ReadingsPage extends Component {
    constructor() {
      super();
      console.dir(readings);
    }
    render() {
        return <main><div className="posts">
            {readings.default.readingsArray.map((object, i) => {
              return <ReadingListItem img={object.image} author={object.author} title={object.title} content={object.preview} id={i} key={i}/>;
            })}
            

        </div></main>
            ;
    }
}



class ReadingListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  imageStyle ={
      float:'left',
      width:'120px',
      marginRight: '20px'
  }
  render() {
    return (
       <article className="post">
           <img src={this.props.img} alt="Smiley face" style={this.imageStyle}/>
    <h2 className="post-title">
     
         {this.props.title}
    </h2>
    <i> {this.props.author}</i>

    
    <p>{this.props.content}</p></article>
    );
  }
}


export default ReadingsPage;