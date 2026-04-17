import React from 'react';
import './SOPCard.css';

const SOPCard = ({ title, category, progress, detailLink }) => {
    return (
        <div className="sop-card">
            <h3>{title}</h3>
            <p>Category: {category}</p>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <a href={detailLink} className="detail-link">View Details</a>
        </div>
    );
};

export default SOPCard;