const { write } = require('./writer');

const str = `node_modules`;

const gitignoreWriter = path => {
  write(str, path);
};

module.exports = gitignoreWriter;