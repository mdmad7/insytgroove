import React, { Component } from 'react';
import axios from 'axios';

import PostCard from '../components/postcard';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${
          this.props.match.params.id
        }/posts`,
      )
      .then(response => {
        this.setState({
          posts: response.data,
        });
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div className=" uk-width-1-2@s">
        <div>
          {posts
            .sort((postone, posttwo) => {
              return parseFloat(posttwo.id) - parseFloat(postone.id);
            })
            .map(post => <PostCard key={post.id} {...post} />)}
        </div>
      </div>
    );
  }
}

export default Profile;
