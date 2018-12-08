import React from "react";
import PropTypes from "prop-types";

const UserCard = props => {
  return (
    <div
      className="card text-white border-dark bg-dark mb-3"
      style={{ margin: "3rem", minWidth: "18rem" }}
    >
      <img
        className="card-img-top"
        src={props.avatar}
        alt={`${props.username} github profile`}
      />
      <div className="card-body">
        <h5 className="card-title">{props.username}</h5>
        <a href={props.repos_url} className="btn btn-primary">
          See repositories
        </a>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  repos_url: PropTypes.string.isRequired
};

export default UserCard;
