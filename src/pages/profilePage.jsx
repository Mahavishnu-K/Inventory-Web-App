import React, { useState } from "react";
import Navbar from "../components/navbar";
import "@/styles/profilePage.css";

const ProfilePage = () => {
  const mockData = {
    fullName: "John Doe",
    username: "john_doe",
    bio: "Software engineer with a passion for building intuitive user interfaces.",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Tech Lane, Silicon Valley, CA",
    profilePicture: null, 
  };

  const [profile, setProfile] = useState(mockData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, profilePicture: file });
  };

  const handleUpdate = () => {
    console.log("Updated Profile:", profile);
    alert("Profile updated successfully!");
  };

  const handleReset = () => {
    setProfile(mockData);
  };

  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "20px" }}>
        <div className="full-container">
          <div className="profile-container">
            <div className="profile-picture-container">
              <label htmlFor="profilePicture" className="upload-label">
                {profile.profilePicture ? (
                  <img
                    src={URL.createObjectURL(profile.profilePicture)}
                    alt="Profile"
                    className="profile-preview"
                  />
                ) : (
                  <div className="upload-placeholder">Upload your photo</div>
                )}
              </label>
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handleFileChange}
                hidden
              />
              <div className="button-group">
                <button className="upload-button">Upload</button>
                <button
                  className="cancel-button"
                  onClick={() => setProfile({ ...profile, profilePicture: null })}
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className="profile-form">
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Please enter your full name"
                  value={profile.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Please enter your username"
                  value={profile.username}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label>Bio</label>
                <textarea
                  name="bio"
                  placeholder="Write your bio here"
                  value={profile.bio}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please enter your email"
                  value={profile.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Please enter your phone number"
                  value={profile.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label>Warehouse Address</label>
                <textarea
                  name="address"
                  placeholder="Write your address here"
                  value={profile.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="button-container">
                <button className="update-button" onClick={handleUpdate}>
                  Update Profile
                </button>
                <button className="reset-button" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
