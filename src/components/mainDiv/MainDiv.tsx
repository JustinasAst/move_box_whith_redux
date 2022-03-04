import React, { FC } from 'react';
import CenterDiv from '../centerDiv/CenterDiv';
import './MainDiv.css';
import { useSelector } from 'react-redux';

const MainDiv: FC = () => {
  return (
    <div className="main_div">
      <CenterDiv />
    </div>
  );
};

export default MainDiv;
