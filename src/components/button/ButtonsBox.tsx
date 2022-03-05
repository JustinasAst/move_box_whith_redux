import { FC } from 'react';
import './ButtonsBox.css';
import { BsTriangle, BsCircle } from 'react-icons/bs';
import { GoX } from 'react-icons/go';
import { FiSquare } from 'react-icons/fi';

import { useSelector, useDispatch } from 'react-redux';
import { UserActionTypes } from '../../store/reducer/useReducer';
import { RootState } from '../../store/reducer';

const ButtonsBox: FC = () => {
  const action = useSelector((state: RootState) => state.move);
  const dispatch = useDispatch();

  const goLeft = () => dispatch({ type: UserActionTypes.MOVE_LEFT });
  const goRight = () => dispatch({ type: UserActionTypes.MOVE_RIGHT });
  const goUp = () => dispatch({ type: UserActionTypes.MOVE_UP });
  const goDown = () => dispatch({ type: UserActionTypes.MOVE_DOWN });

  console.log(action);

  return (
    <div className="button">
      <div onClick={goUp} className="button-up">
        <BsTriangle />
      </div>
      <div onClick={goDown} className="button-down">
        <GoX />
      </div>
      <div onClick={goLeft} className="button-left">
        <FiSquare />
      </div>
      <div onClick={goRight} className="button-right">
        <BsCircle />
      </div>
    </div>
  );
};

export default ButtonsBox;
