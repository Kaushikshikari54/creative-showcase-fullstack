import React, { useState, useEffect } from 'react';
import '../styles/UserProfile.css';

function UserProfile({ currentUser }) {
  const [userImages, setUserImages] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    // Load user's images from localStorage
    const savedImages = localStorage.getItem(`${currentUser?.username}-images`);
    if (savedImages) {
      setUserImages(JSON.parse(savedImages));
    }
  }, [currentUser]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select an image');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = {
        id: Date.now(),
        src: reader.result,
        title: file.name,
      };
      const updatedImages = [...userImages, newImage];
      setUserImages(updatedImages);
      localStorage.setItem(`${currentUser?.username}-images`, JSON.stringify(updatedImages));
      setFile(null);
    };
    reader.readAsDataURL(file);
  };

  if (!currentUser) {
    return <div className="profile-container"><p>Please login to view your profile</p></div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Welcome, @{currentUser.username}!</h1>
        <p>Manage your artwork here</p>
      </div>

      <div className="upload-section">
        <h2>Upload New Artwork</h2>
        <form onSubmit={handleUpload}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <button type="submit">Upload</button>
        </form>
      </div>

      <div className="gallery-section">
        <h2>Your Artwork</h2>
        {userImages.length === 0 ? (
          <p>No artwork uploaded yet. Start by uploading an image!</p>
        ) : (
          <div className="user-gallery">
            {userImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={image.title} />
                <p>{image.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
