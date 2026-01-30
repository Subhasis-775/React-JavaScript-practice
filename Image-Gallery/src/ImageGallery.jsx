import React, { useState } from 'react';
import './styles.css'
// Image Gallery Component
const ImageGallery = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [images, setImages] = useState([]);
  const [open, setIsopen] = useState(false);
  const [activeImageId, setActiveImageId] = useState(null);
  const handleOpen = (id) => {
    if (open && activeImageId === id) {
      handleClose(); // toggle close
    } else {
      setActiveImageId(id);
      setIsopen(true);
    }
  };
  const handleClose = () => {
    setActiveImageId(null);
    setIsopen(false);
  }
  const handleAdd = () => {
    if (inputUrl.trim() === "") {
      return;
    }
    setImages(prev => [...prev, { id: Date.now(), url:inputUrl}]);
    setInputUrl("");
  }
  const handleDelete = (id) => {
    setImages(prev=>prev.filter(image => image.id !== id));
    
  }
  const activeImage = images.find(image => image.id === activeImageId);
  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        <input type="text" placeholder="Enter image URL"
          value={inputUrl}
        onChange={(e)=>setInputUrl(e.target.value)}
        />
        <button onClick={handleAdd}>Add Image</button>
      </div>
      {/* Display images */}
      <div className="gallery">
        {images.map(image => (
          <div key={image.id} className="image-card">
            <img
              src={image.url}
              alt="gallery-image"
              width="150"
              onClick={() => handleOpen(image.id)}
            />
            <button onClick={() => handleDelete(image.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      {open && (
        <div
          data-testid="modal-backdrop"
          onClick={handleClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div id="modal" onMouseDown={(e) => e.stopPropagation()}
            style={{ background: "#fff", padding: 20 }}>
            <img src={activeImage?.url} height="300" width="300"/>
        </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery