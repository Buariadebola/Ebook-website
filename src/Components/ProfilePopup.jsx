import React, { useState, useEffect } from 'react'

function ProfilePopup({ user = { name: '', email: '', image: '' }, onSave }) {
    // Load from localStorage if available, else use prop
    const getInitialProfile = () => {
        const saved = localStorage.getItem('profile');
        return saved ? JSON.parse(saved) : user;
    };

    const [name, setName] = useState(getInitialProfile().name || 'user');
    const [email, setEmail] = useState(getInitialProfile().email || 'user@example.com');
    const [image, setImage] = useState(getInitialProfile().image || "https://via.placeholder.com/150");
    const [isEditing, setIsEditing] = useState(false);

    // Save to localStorage whenever profile changes
    useEffect(() => {
        localStorage.setItem('profile', JSON.stringify({ name, email, image }));
    }, [name, email, image]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSave = () => {
        onSave && onSave({ name, email, image });
        setIsEditing(false);
    }

    return (
        <>
            <div className="profile-popup">
                <div className="profile-header">
                    <h1> Profile </h1>
                </div>
                <div className="profile-info">
                    <img src={image} alt="profile" />
                    {isEditing ? (<input type="file" onChange={handleImageChange} />) : null}
                    {isEditing ? (<input type="text" value={name} onChange={(e) => setName(e.target.value)} />) : (
                        <p>{name}</p>
                    )}
                    {isEditing ? (<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />) : (
                        <p>{email}</p>
                    )}
                </div>
                <div className="profile-actions">
                    {isEditing ? (<button className="save-button" onClick={handleSave}>Save</button>) : (<button onClick={() => setIsEditing(true)}>Edit</button>)}
                </div>
            </div>
        </>
    )
}

export default ProfilePopup