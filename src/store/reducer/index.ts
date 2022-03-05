import { combineReducers } from 'redux';
import { moveReducers } from './useReducer';

export const rootReducer = combineReducers({
  movementPositions: moveReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
