import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {
    localStorage.removeItem("isLoggedIn");

    navigate("/");
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h3>Account Settings</h3>
      </div>

      <div className="profile-info">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="avatar"
        />

        <div>
          <h4>{user?.fullName}</h4>
          <p>{user?.email}</p>
        </div>
      </div>

      <p className="profile-description">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>

      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;