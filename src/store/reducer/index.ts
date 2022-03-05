import { combineReducers } from 'redux';
import { moveReducers } from './useReducer';

export const rootReducer = combineReducers({
  moveRedusers: moveReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
