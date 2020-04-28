import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';

import { FETCH_DEVS } from '../types/developers';

export const getDevelopers = createActionThunk(FETCH_DEVS, async (payload) => {
  console.log('payload', payload);
  return payload;
});

export const regularAction = createAction('REGULAR_ACTION');
