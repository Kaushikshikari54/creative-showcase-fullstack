import React, { useState, useEffect } from 'react';
import '../styles/Landing.css';

function Landing() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Mock data - replace with API call later
    const mockImages = [
      { id: 1, src: 'https://via.placeholder.com/300?text=Art+1', username: 'artist1' },
      { id: 2, src: 'https://via.placeholder.com/300?text=Art+2', username: 'artist2' },
      { id: 3, src: 'https://via.placeholder.com/300?text=Art+3', username: 'artist3' },
      { id: 4, src: 'https://via.placeholder.com/300?text=Art+4', username: 'artist4' },
      { id: 5, src: 'https://via.placeholder.com/300?text=Art+5', username: 'artist5' },
      { id: 6, src: 'https://via.placeholder.com/300?text=Art+6', username: 'artist6' },
    ];
    setImages(mockImages);
  }, []);

  return (
    <div className="landing">
      <header className="landing-header">
        <h1>Welcome to Creative Showcase</h1>
        <p>Discover amazing artwork from talented artists</p>
      </header>

      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={`Art by ${image.username}`} />
            <p className="artist-name">by @{image.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
