import React, { Component } from "react";


export default class Newsitem extends Component {
  render() {
   const imgstyle={
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    }
    const textstyle ={
        width: '100%',
        height: '70px',
        objectFit: 'cover',
    }
    const cardstyle= {
        width: '100%',
        height: '47px',
        objectFit: 'cover',
    }
   
   let {title, description, imageurl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageurl} className="card-img-top" style={imgstyle} alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={cardstyle}>{title}...</h5>
            <p className="card-text" style={textstyle}>
               {description}...
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
