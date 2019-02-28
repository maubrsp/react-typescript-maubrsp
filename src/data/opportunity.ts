const Resourcer = require('redux-rest-resource');

export const { types, actions, rootReducer } = Resourcer.createResource({
  name: 'opportunity',
  url: `http://localhost:5000/jobs/:id`,
  // url: 'https://api.myjson.com/bins/:id',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
});
