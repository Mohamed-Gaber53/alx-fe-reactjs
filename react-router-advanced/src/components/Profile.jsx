import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>👤 Profile Page</h2>
      <nav style={{ marginBottom: "10px" }}>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;
