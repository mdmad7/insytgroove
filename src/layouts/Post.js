import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Post from '../containers/Post';

const PostPage = props => {
  return (
    <Switch>
      <Route exact path="/post/:id" component={Post} />
    </Switch>
  );
};

export default PostPage;
