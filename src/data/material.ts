const Resourcer = require('redux-rest-resource');

export const { types, actions, rootReducer } = Resourcer.createResource({
  name: 'material',
  url: `http://api.myjson.com/bins/n6pnu`
});
