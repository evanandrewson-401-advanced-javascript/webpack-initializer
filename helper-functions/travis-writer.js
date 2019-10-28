const { write } = require('./writer');

const str = `language: node_js
node_js: node
`;

const travisWriter = path => {
  write(str, path);
};

travisWriter('./test-travis.js')

module.exports = travisWriter;