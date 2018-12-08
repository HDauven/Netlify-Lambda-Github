import React from "react";
import PropTypes from "prop-types";

import UserCard from "./UserCard";

const UserList = props => {
  const users = props.users;

  const usersList = users.map(user => (
    <UserCard
      key={user.id}
      avatar={user.avatar_url}
      username={user.login}
      repos_url={user.repos_url}
    />
  ));
  return <div className="card-deck">{usersList}</div>;
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
