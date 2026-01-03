import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/UserPublicPage.css';

function UserPublicPage() {
  const { username } = useParams();
  const [userImages, setUserImages] = useState([]);

  useEffect(() => {
    const savedImages = localStorage.getItem(`${username}-images`);
    if (savedImages) {
      setUserImages(JSON.parse(savedImages));
    }
  }, [username]);

  return (
    <div className="public-page-container">
      <div className="public-header">
        <h1>@{username}'s Gallery</h1>
      </div>

      <div className="gallery-section">
        {userImages.length === 0 ? (
          <p>No artwork from @{username} yet</p>
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

export default UserPublicPage;
