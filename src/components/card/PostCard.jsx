import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

export class PostCard extends Component {
  render() {
    const { id, title, } = this.props;
    return (
        <div className="itme-post-cart ">
          <div className="img">
            <img src="" alt="" />
          </div>

          <div className="p-3">
            <div className="post-title">
              {title}
            </div>

            <Link to={`/posts/${id}`}>
              More
            </Link>
          </div>
        </div>
    );
  }
}

export default PostCard;
