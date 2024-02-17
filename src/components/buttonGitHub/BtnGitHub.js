import React from 'react';
import './styles.css';
import gitHubIcont from './../../img/icons/gitHub-black.svg';

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcont} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
