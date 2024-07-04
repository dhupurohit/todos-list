import React from 'react';

export const About = () => {
    const aboutContainerStyle = {
        maxWidth: '900px',
        margin: 'auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
       
    };

    const headingStyle = {
        fontSize: '24px',
        borderBottom: '2px solid #333',
        paddingBottom: '10px',
        marginBottom: '15px',
    };

    const paragraphStyle = {
        lineHeight: '1.6',
        marginBottom: '10px',
    };

    const listStyle = {
        marginBottom: '10px',
    };

    return (
        <div style={aboutContainerStyle}>
            <h2 style={headingStyle}>About</h2>
            <p style={paragraphStyle}>
                Hello! I'm a student pursuing my Master's in Computer Applications (MCA). This project is part of my practice to explore and deepen my understanding of web development using React.
            </p>
            <h3 style={headingStyle}>Project Overview</h3>
            <p style={paragraphStyle}>
                This todo list application aims to help users manage their tasks effectively. Currently, it allows users to add new todos, but I am actively working on adding functionality to mark todos as completed and filter them based on their status (All, Active, Completed).
            </p>
            <h3 style={headingStyle}>Future Plans</h3>
            <ul style={listStyle}>
                <li style={paragraphStyle}>Implement marking todos as completed functionality.</li>
                <li style={paragraphStyle}>Enhance filtering options for better task management.</li>
            </ul>
            <p style={paragraphStyle}>
                Thank you for visiting and exploring my project!
            </p>
        </div>
    );
};
