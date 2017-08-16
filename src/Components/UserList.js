import React, { Component } from 'react';

const User = ({ name, image, repoCount }) => {
  return (
    <div>
      <img src={image} alt="github profile picture" width={200} />

      <p className='user-name'>
        { name }
      </p>

      <p className="repo-count">
        { repoCount }
      </p>

    </div>
  )
};

const UserList  = ({users}) => {
  return (
    <div>
      <h2>
        users
      </h2>

      { users.map( ({login, avatar_url, public_repos}, index) => (
        <User
          name={login}
          image={avatar_url}
          repoCount={public_repos}
          key={index}
         />
      )) }
    </div>
  );
};

export default UserList;