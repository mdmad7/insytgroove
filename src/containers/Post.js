import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      comments: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${
          this.props.match.params.id
        }/comments`,
      )
      .then(response => {
        this.setState({
          comments: response.data,
        });
      });

    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${
          this.props.match.params.id
        }`,
      )
      .then(response => {
        this.setState(
          {
            post: response.data,
          },
          () => {
            console.log(this.state);
          },
        );
      });
  }
  render() {
    const { post, comments } = this.state;
    return (
      <div className=" uk-container uk-container-large">
        <h1 className=" uk-text-capitalize">{post.title}</h1>
        <p>{post.body}</p>

        <h3>Comments</h3>
        <div>
          {comments.map(comment => {
            return (
              <div key={comment.id}>
                <h5 className=" uk-text-capitalize">Title: {comment.name}</h5>
                <p>{comment.body}</p>
                <p>By: {comment.email}</p>
                <hr />
              </div>
            );
          })}

          <div>
            <form>
              <label htmlFor="comment-box">Add Comment</label>
              <textarea
                placeholder="Add a comment"
                rows="15"
                id="comment-box"
                style={{ resize: 'none', width: '100%' }}
              />
              <button className="uk-button uk-button-primary">
                add comment
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
