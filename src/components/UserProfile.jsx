// src/components/UserProfile.jsx
import profile from "../assets/profile.jpg";

const UserProfile = ({ user }) => (
  <div className="flex items-center space-x-3 mb-10">
    <img
      src={profile}
      alt="Profile"
      className="w-12 h-12 rounded-full border border-gray-300"
    />
    <div>
      <h3 className="font-semibold text-gray-800">{user.name}</h3>
      <p className="text-sm text-gray-500">{user.phone}</p>
    </div>
  </div>
);

export default UserProfile;