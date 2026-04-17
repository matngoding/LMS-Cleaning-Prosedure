import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ completion }) => {
    const percentage = Math.min(Math.max(completion, 0), 100);

    return (
        <div style={{ position: 'relative', width: '100%', height: '30px', background: '#e0e0e0' }}>
            <div
                style={{
                    width: `${percentage}%`,
                    height: '100%',
                    background: '#76c7c0',
                    transition: 'width 0.3s ease'
                }}
            />
            <span style={{
                position: 'absolute',
                width: '100%',
                textAlign: 'center',
                color: '#000'
            }}>{`${percentage}%`}</span>
        </div>
    );
};

ProgressBar.propTypes = {
    completion: PropTypes.number.isRequired,
};

export default ProgressBar;
