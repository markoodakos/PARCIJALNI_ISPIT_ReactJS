import PropTypes from "prop-types";

function UserDetails({ userData, repositories, onReset }) {
  return (
    <div>
      <img src={userData.avatar_url} alt="User Avatar" />
      <p>Username: {userData.name}</p>
      <p>Location: {userData.location}</p>
      <p>Bio: {userData.bio}</p>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

UserDetails.propTypes = {
  userData: PropTypes.object.isRequired,
  repositories: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
