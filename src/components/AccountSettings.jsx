import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import '@/components/AccountSettings.css';

const AccountSettings = () => {
    const initialSettings = {
        profilePicture: null,
        username: '',
        fullName: '',
        email: '',
        phone: '',
        bio: '',
        warehouseAddress: '',
        categories: [],
    };

    const [accountSettings, setAccountSettings] = useState(initialSettings);
    const [showCategorySelect, setShowCategorySelect] = useState(false);

    const onDrop = (acceptedFiles) => {
        setAccountSettings((prevState) => ({
            ...prevState,
            profilePicture: acceptedFiles[0],
        }));
    };

    const handleAccountChange = (e) => {
        const { name, value } = e.target;
        setAccountSettings((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleUpload = () => {
        alert('Profile picture uploaded!');
    };

    const handleCancel = () => {
        setAccountSettings((prevState) => ({
            ...prevState,
            profilePicture: null,
        }));
    };

    const handleCategoryChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setAccountSettings((prevState) => ({
            ...prevState,
            categories: [...new Set([...prevState.categories, ...selectedOptions])],
        }));
        setShowCategorySelect(false);
    };

    const toggleCategorySelect = () => {
        setShowCategorySelect((prev) => !prev);
    };

    const handleReset = () => {
        setAccountSettings(initialSettings);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*',
        maxFiles: 1,
    });

    return (
        <div className="account-settings-container">
            <h3 className="account-settings-title">Account Settings</h3>

            <div className="dropzone-container">
                <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the image here...</p>
                    ) : accountSettings.profilePicture ? (
                        <p>{accountSettings.profilePicture.name}</p>
                    ) : (
                        <p>Drag & drop a profile picture, or click to select</p>
                    )}
                </div>

                <div className="button-container">
                    <button className="one" onClick={handleUpload}>Upload</button>
                    <button className="two" onClick={handleCancel}>Cancel</button>
                </div>
            </div>

            <div id="input-field">
                <label>Username:</label>
                <input type="text" name="username" value={accountSettings.username} onChange={handleAccountChange} />
            </div>

            <div id="input-field">
                <label>Full Name:</label>
                <input type="text" name="fullName" value={accountSettings.fullName} onChange={handleAccountChange} />
            </div>

            <div id="input-field">
                <label>Email:</label>
                <input type="email" name="email" value={accountSettings.email} onChange={handleAccountChange} />
            </div>

            <div id="input-field">
                <label>Phone Number:</label>
                <input type="tel" name="phone" value={accountSettings.phone} onChange={handleAccountChange} />
            </div>

            <div id="input-field">
                <label>Bio:</label>
                <textarea name="bio" value={accountSettings.bio} onChange={handleAccountChange} />
            </div>

            <div id="input-field">
                <label>Warehouse Address:</label>
                <textarea name="warehouseAddress" value={accountSettings.warehouseAddress} onChange={handleAccountChange} />
            </div>

            <div className="action-buttons">
                <button onClick={() => alert('Profile updated!')}>Update Profile</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default AccountSettings;