import React from 'react';
import img from './../img/projects/01.jpg';
import BtnGitHub from 'components/buttonGitHub/BtnGitHub';

const Project = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>

          <img src={img} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>
          <BtnGitHub link="https://github.com/OleksandrTsurkan/goit-react-hw-07-phonebook?tab=readme-ov-file" />
        </div>
      </div>
    </main>
  );
};

export default Project;
