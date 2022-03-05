import { FC } from 'react';
import './ButtonsBox.css';

import { BsTriangle, BsCircle } from 'react-icons/bs';
import { GoX } from 'react-icons/go';
import { FiSquare } from 'react-icons/fi';

import { useSelector, useDispatch } from 'react-redux';
import { UserActionTypes } from '../../store/reducer/useReducer';
import { RootState } from '../../store/reducer';

const ButtonsBox: FC = () => {
  const axisValues = useSelector((state: RootState) => state.moveRedusers);
  const dispatch = useDispatch();

  const moveLeft = () => dispatch({ type: UserActionTypes.MOVE_LEFT });
  const moveRight = () => dispatch({ type: UserActionTypes.MOVE_RIGHT });
  const moveUp = () => dispatch({ type: UserActionTypes.MOVE_UP });
  const moveDown = () => dispatch({ type: UserActionTypes.MOVE_DOWN });

  return (
    <div className="buttons-box">
      <div onClick={moveUp} className="button-up">
        <BsTriangle />
      </div>

      <div onClick={moveDown} className="button-down">
        <GoX />
      </div>

      <div onClick={moveLeft} className="button-left">
        <FiSquare />
      </div>

      <div onClick={moveRight} className="button-right">
        <BsCircle />
      </div>
    </div>
  );
};

export default ButtonsBox;
