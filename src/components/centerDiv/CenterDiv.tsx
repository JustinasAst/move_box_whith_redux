import React from 'react';
import './CenterDiv.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

const CenterDiv = () => {
  const leftRight = useSelector((state: RootState) => state.move);

  return (
    <div
      className="center_div"
      style={{ transform: `translate(${leftRight.Y}px, ${leftRight.X}px)` }}
    ></div>
  );
};

export default CenterDiv;
