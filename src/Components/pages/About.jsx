import React from 'react';

const About = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems:"center", gap: "10px"}}>
            <h1 style={{marginTop: "25px"}}>
                This is education project "Simple blog on ReactJS"
            </h1>
            <div>
                <p>Made by Kanumone</p>
                <a href="https://github.com/Kanumone">My Github</a>
            </div>
        </div>
    );
};

export default About;