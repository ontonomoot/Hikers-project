import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectorFriends } from '../friends/friendsSlice';

import './Users.css';

function Users() {
  const users = useSelector(selectorFriends);
  const usersList = users && users.users;
  const navigate = useNavigate();
  // console.log(usersList);
  return (
    <div>
      <div className="users-title">
        Все пользователи
      </div>
      <div className="all-users">
        {
        usersList && usersList.map((user) => (
          <div className="user-block" key={user.id}>
            <div className="user">
              <div>
                {/* <NavLink to="/">клик</NavLink> */}
                <img src={`/images/${user.ava}`} alt="img" className="ava-img" />
              </div>
              <div className="user-info">
                <div>{user.user_name}</div>
                <div>{user.city}</div>
                <div>{user.favorite_cat}</div>
                <div>{user.email}</div>
                <a href={user.link}>{user.link}</a>
              </div>
            </div>

          </div>
      ))
    }
      </div>
    </div>
  );
}

export default Users;
