import React from 'react';
import './MovingBox.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

const MovingBox = () => {
  const leftRight = useSelector((state: RootState) => state.movementPositions);

  return (
    <div
      className="moving_box"
      style={{ transform: `translate(${leftRight.y}px, ${leftRight.x}px)` }}
    ></div>
  );
};

export default MovingBox;
