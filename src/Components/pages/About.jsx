import React from 'react';

const About = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h1 style={{textAlign: "center", marginTop: "25px"}}>
                This is education project "Simple blog on ReactJS"
            </h1>
            <div style={{alignSelf: "end"}}>
                <p>Made by Kanumone</p>
                <a href="https://github.com/Kanumone">My Github</a>
            </div>
        </div>
    );
};

export default About;