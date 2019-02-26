import { combineReducers } from 'redux';
import { rootReducer as jobsReducers } from '../data/jobs';
import { rootReducer as materialsReducers } from '../data/material';

export const reducers = combineReducers({
  jobs: jobsReducers,
  materials: materialsReducers
});
