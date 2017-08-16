import React, { Component } from 'react';

const User = ({ name, image, repoCount }) => {
  return (
    <div>
      <img src={image} alt="github profile picture" />

      <p className='user-name'>
        { name }
      </p>

      <p className="repo-count">
        { repoCount }
      </p>

    </div>
  )
};

export default class UserList extends Component {
  render() {
    console.log(this.props.users)
    return (
      <div>
        <h2>
          users
        </h2>

        { this.props.users.map( ({login, avatar_url, public_repos}) => (
          <User
            name={login}
            image={avatar_url}
            repoCount={public_repos}
           />
        )) }
      </div>
    );
  }
};
