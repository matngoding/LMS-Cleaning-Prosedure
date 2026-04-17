import React from 'react';

const Dashboard = () => {
    const totalSOPs = 100;  // Example number, replace with actual data
    const completedSOPs = 70; // Example number, replace with actual data
    const completionPercentage = (completedSOPs / totalSOPs) * 100;

    return (
        <div>
            <h1>Welcome to the Dashboard!</h1>
            <h2>Quick Stats:</h2>
            <p>Total SOPs: {totalSOPs}</p>
            <p>Completion Percentage: {completionPercentage.toFixed(2)}%</p>
        </div>
    );
};

export default Dashboard;