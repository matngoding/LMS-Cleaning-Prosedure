import React from 'react';

const Profile = () => {
    const username = 'matngoding';
    const email = 'user@example.com'; // Replace with a dynamic value if needed
    const overallProgress = 75; // Example progress percentage
    const completedSOPs = [
        'SOP 1: Safety Procedures',
        'SOP 2: Equipment Handling',
        'SOP 3: Waste Disposal',
    ];

    return (
        <div>
            <h1>User Profile</h1>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Overall Progress:</strong> {overallProgress}%</p>
            <h2>Completed SOPs:</h2>
            <ul>
                {completedSOPs.map((sop, index) => (
                    <li key={index}>{sop}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;