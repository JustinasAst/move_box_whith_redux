export enum UserActionTypes {
  MOVE_RIGHT = 'MOVE_RIGHT',
  MOVE_LEFT = 'MOVE_LEFT',
  MOVE_UP = 'MOVE_UP',
  MOVE_DOWN = 'MOVE_DOWN',
  dispatch = 'dispatch',
}

interface MoveLeft {
  type: UserActionTypes.MOVE_LEFT;
  payload: number;
}

interface MoveRight {
  type: UserActionTypes.MOVE_RIGHT;
  payload: number;
}

interface MoveUp {
  type: UserActionTypes.MOVE_UP;
  payload: number;
}

interface MoveDown {
  type: UserActionTypes.MOVE_DOWN;
  payload: number;
}

type Action = MoveLeft | MoveRight | MoveUp | MoveDown;

interface CounterState {
  Y: number;
  X: number;
}

const initialState: CounterState = {
  Y: 0,
  X: 0,
};

export const moveReducers = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case UserActionTypes.MOVE_LEFT:
      return { ...state, Y: state.Y < 50 ? (state.Y = 0) : state.Y - 50 };
    case UserActionTypes.MOVE_RIGHT:
      return { ...state, Y: state.Y >= 750 ? (state.Y = 750) : state.Y + 50 };
    case UserActionTypes.MOVE_UP:
      return { ...state, X: state.X < 50 ? (state.X = 0) : state.X - 50 };
    case UserActionTypes.MOVE_DOWN:
      return { ...state, X: state.X > 700 ? (state.X = 750) : state.X + 50 };
    default:
      return state;
  }
};
