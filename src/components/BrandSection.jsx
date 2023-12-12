import React from 'react';

const BrandSection = ({ brandName, imageSrc, description, imageOnLeft = true }) => {
  return (
    <div className={`row mb-5 ${imageOnLeft ? '' : 'flex-row-reverse'}`}>
      <div className="col-md-6">
        <img
          src={imageSrc}
          alt={`${brandName} Logo`}
          className="img-fluid rounded"
          style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}
        />
      </div>
      <div className="col-md-6">
        <h2 className="display-4">{brandName}</h2>
        <p className="lead">{description}</p>
      </div>
    </div>
  );
};

export default BrandSection;
