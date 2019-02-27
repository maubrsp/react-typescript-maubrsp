import { combineReducers } from 'redux';
import { rootReducer as jobsReducers } from '../data/jobs';
import { rootReducer as materialsReducers } from '../data/material';
import { rootReducer as opportunityReducer } from '../data/opportunity';

export const reducers = combineReducers({
  opportunity: opportunityReducer,
  jobs: jobsReducers,
  materials: materialsReducers
});
