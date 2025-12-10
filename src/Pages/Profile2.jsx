import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menubar from '../Components/Menubar';

const Profile2 = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem('token'); // JWT token

    // Fetch profile
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUsername(res.data.username);
                setEmail(res.data.email);
                setImage(res.data.image);
            } catch (err) {
                console.error("Failed to fetch profile", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [token]);

    // Image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        reader.readAsDataURL(file);
    };

    // Save profile
    const handleSave = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert("You are not signed in");
        return;
    }

    try {
        const res = await axios.put(
            'http://localhost:3001/api/profile', 
            { username, email, image },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        // Update state with returned data to reflect changes
        setUsername(res.data.username);
        setEmail(res.data.email);
        setImage(res.data.image);

        setIsEditing(false);
        alert("Profile updated successfully!");
    } catch (err) {
        console.error("Failed to update profile", err);
        alert(err.response?.data?.message || "Error updating profile");
    }
};

    if (loading) return <p>Loading profile...</p>;

    return (
        <div>
            <Menubar />
            <div className="profile-popup">
                <div className="profile-header">
                    <h1>Profile</h1>
                </div>

                <div className="profile-info">
                    <img src={image || "https://via.placeholder.com/150"} alt="profile" />

                    {isEditing && <input type="file" onChange={handleImageChange} />}

                    {isEditing ? (
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    ) : (
                        <p>{username}</p>
                    )}

                    {isEditing ? (
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    ) : (
                        <p>{email}</p>
                    )}
                </div>

                <div className="profile-actions">
                    {isEditing ? (
                        <button className="save-button" onClick={handleSave}>Save</button>
                    ) : (
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile2;
