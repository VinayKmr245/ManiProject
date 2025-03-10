import { useState } from "react";
import myImage from "../assets/myImage.png";
export default function UserProfile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
  });

  const [formData, setFormData] = useState({
    email: user.email,
    phone: user.phone,
    address: user.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser((prevUser) => ({ ...prevUser, ...formData }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-2/3 flex">
        {/* Left Side - User Info */}
        <div className="w-1/3 flex flex-col items-center border-r p-4">
          <img
            src={myImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 border"
          />
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
          <p className="text-gray-600 text-center">{user.address}</p>
        </div>

        {/* Right Side - Edit Form */}
        <div className="w-2/3 p-4">
          <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="mt-3 p-2 bg-blue-500 text-white rounded w-full"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
