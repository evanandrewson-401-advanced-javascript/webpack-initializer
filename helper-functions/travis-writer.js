const { write } = require('./writer');

const str = `language: node_js
node_js: node
`;

const travisWriter = path => {
  write(str, path);
};

module.exports = travisWriter;