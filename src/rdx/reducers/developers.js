import { handleActions } from 'redux-actions';

import { FETCH_DEVS } from '../types/developers';

const initialState = {
  developers: [],
};

export const developers = handleActions(
  {
    [`${FETCH_DEVS}_STARTED`]: (_state, action) => {
      const state = Object.assign({}, { ..._state });
      state.developers = 'start';
      return state;
    },
    [`${FETCH_DEVS}_SUCCEDED`]: (_state, action) => {
      const state = Object.assign({}, { ..._state });
      state.developers = action.payload;
      return state;
    },
    [`${FETCH_DEVS}_FAILED`]: (_state, action) => {
      const state = Object.assign({}, { ..._state });
      // action.payload // ! error
      state.developers = 'error';
      return state;
    },
  },
  initialState
);
