/* eslint-disable no-console */
const fs = require('fs');

const write = (str, path) => {
  fs.writeFileSync(path, str, err => {
    if(err) throw err;
    console.log(`${path} written`);
  });
};

const writeJson = (obj, path) => {
  fs.writeFileSync(path, JSON.stringify(obj, null, 2), err => {
    if(err) throw err;
    console.log(`${path} written`);
  });
};

module.exports = {
  write,
  writeJson
};
