import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      photos: [],
      albums: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        return error;
      });

    axios
      .get('http://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.setState({ photos: response.data });
      })
      .catch(error => {
        return error;
      });

    axios
      .get('http://jsonplaceholder.typicode.com/albums')
      .then(response => {
        this.setState({ albums: response.data });
      })
      .catch(error => {
        return error;
      });
  }

  getDps = () => {
    const users = this.state.users.map(user => ({
      id: user.id,
      name: user.name,
      albums: this.state.albums.filter(album => album.userId === user.id),
    }));

    console.log(users);

    const detailedUser = users.map(user => ({
      id: user.id,
      name: user.name,
      albums: user.albums.map(album => ({
        title: album.title,
        id: album.id,
        userId: album.userId,
        photos: this.state.photos.filter(photo => photo.albumId === album.id),
      })),
    }));

    console.log(detailedUser);

    return (
      <div>
        {detailedUser.map(user => (
          <div key={user.id}>
            {/* <h4>{user.name}</h4> */}
            <Link to={`/profile/${user.id}`}>{user.name}</Link>
            <ul data-uk-accordion>
              {user.albums.map(album => (
                <li key={album.id} className="">
                  <a className="uk-accordion-title" href="#">
                    {album.title}
                  </a>
                  <div className="uk-accordion-content">
                    {album.photos !== undefined
                      ? album.photos.map(photo => (
                          <div key={photo.id}>
                            <img src={photo.url} />
                          </div>
                        ))
                      : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.getDps()}
        {/* <ul className="uk-list">
          {this.getDps()}
          {users.map(user => (
            <li key={user.id}>
              
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default Home;
