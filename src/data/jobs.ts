const Resourcer = require('redux-rest-resource');

export const { types, actions, rootReducer } = Resourcer.createResource({
  name: 'jobs',
  // url: `http://localhost:5000/jobs`,
  url: 'https://api.myjson.com/bins/16axwa',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
});
