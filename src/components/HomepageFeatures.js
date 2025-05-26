import React from 'react';
import MountainImage from '@site/static/img/undraw_docusaurus_mountain.svg';
import TreeImage from '@site/static/img/undraw_docusaurus_tree.svg';
import ReactImage from '@site/static/img/undraw_docusaurus_react.svg';

export default function HomepageFeatures() {
  return (
    <div>
      <h2>Features</h2>
      <div>
        <img src={MountainImage} alt="Mountain" />
        <img src={TreeImage} alt="Tree" />
        <img src={ReactImage} alt="React" />
      </div>
    </div>
  );
}