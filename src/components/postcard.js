import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = props => {
  return (
    <Link to={`/post/${props.id}`}>
      <div
        className="uk-card uk-card-default uk-width-1-1@s"
        style={{ marginBottom: '2rem' }}>
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom uk-text-capitalize">
                {props.title}
              </h3>
              {/* <p className="uk-text-meta uk-margin-remove-top">
              <span>Michael Davis</span>
            </p> */}
            </div>
          </div>
        </div>
        <div className="uk-card-body">
          <p>{props.body}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
