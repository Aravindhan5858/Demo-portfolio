import React from 'react'

/**
 * Certificate Card Component - Display Only
 */
export default function CertificateCard({ title, issuer, defaultImage }) {
  const handleView = () => {
    if (defaultImage) {
      window.open(defaultImage, '_blank')
    }
  }

  return (
    <div className="certificate-card">
      <div className="image-container">
        {defaultImage ? (
          <img 
            src={defaultImage} 
            alt={`${title} Certificate`} 
            className="certificate-image loaded"
            loading="lazy"
          />
        ) : (
          <div className="placeholder">📜</div>
        )}
        
        <div className="overlay">
          {defaultImage && (
            <button className="overlay-btn" onClick={handleView}>
              View Full
            </button>
          )}
        </div>
      </div>
      
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="issuer">{issuer}</p>
      </div>
    </div>
  )
}
