import React from 'react';
import './User.css';

const UserList = ({user}) => {
  return (
    <div className='card'>
        <p>Name : {user.name.title}&nbsp;{user.name.first}&nbsp;{user.name.last}</p>
        <p>Email : {user.email}</p>
        </div>
  )
}

export default UserList