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
  y: number;
  x: number;
}

const initialState: CounterState = {
  y: 0,
  x: 0,
};

export const moveReducers = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case UserActionTypes.MOVE_LEFT:
      return { ...state, y: state.y < 50 ? (state.y = 0) : state.y - 50 };
    case UserActionTypes.MOVE_RIGHT:
      return { ...state, y: state.y >= 750 ? (state.y = 750) : state.y + 50 };
    case UserActionTypes.MOVE_UP:
      return { ...state, x: state.x < 50 ? (state.x = 0) : state.x - 50 };
    case UserActionTypes.MOVE_DOWN:
      return { ...state, x: state.x > 700 ? (state.x = 750) : state.x + 50 };
    default:
      return state;
  }
};
