import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
   
    return (
      <div className="card my-3">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "50%", zIndex: "1" }}
        >
          {"Source : "}
          {source}{" "}
        </span>
        <img src={imgUrl} className="card-img-top" alt="No Image Provided" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-danger">
              By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default Newsitem;
