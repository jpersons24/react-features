import React from 'react';
import MajorFeatures from './MajorFeatures';
import Advantages from './Advantages';
import Limitations from './Limitations';
import Jsx from './Jsx';
import VirtualDom from './VirtualDom';

const General = () => {
  return (
    <div className="general">
      <h2>General React</h2>
      <div>
        <h3>What is React?</h3>
        <ul className="numbered-list">
          <li>It is a front-end JavaScript library. Made by Facebook in 2011.</li>
          <li>React follows a component based approach, which helps in building UI components.</li>
          <li>Used to develop complex and interactive web and mobile UI</li>
          <li>Currently, it is supported by a large open source community with over 1000 contributors.</li>
        </ul>
      </div>
      <MajorFeatures />
      <div className="grid">
        <Advantages />
        <Limitations />
      </div>
      <Jsx />
      <VirtualDom />
    </div>
  )
};

export default General;
