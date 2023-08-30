import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
      <div className="card">
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:"90%" , zIndex: 1}}>{source}</span>
          <img src={!imageUrl ?"https://static1.xdaimages.com/wordpress/wp-content/uploads/2021/08/Samsung_Galaxy_Watch_4_Classic-Featured_Image_Lifestyle_07_1056375794-Web.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}.</p>
            <p className="card-text"> <small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel= "noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
      </div>  
      </div>
    )
  }
}

export default NewsItem