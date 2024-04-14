import React, { useState } from "react";
import UserForm from "../UserForm";
import UserDetails from "../UserDetails";

function MainComponent() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [repositories, setRepositories] = useState([]);

  const fetchUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        return fetch(data.repos_url);
      })
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleFormSubmit = (username) => {
    setUsername(username);
    fetchUserData();
  };

  const handleReset = () => {
    setUsername("");
    setUserData({});
    setRepositories([]);
  };

  return (
    <div>
      <UserForm onSubmit={handleFormSubmit} />
      {Object.keys(userData).length > 0 && (
        <UserDetails
          userData={userData}
          repositories={repositories}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default MainComponent;
