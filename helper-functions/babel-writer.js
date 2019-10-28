const { writeJson } = require('./writer');

const json = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
};

const babelWriter = path => {
  writeJson(json, path);
};

module.exports = babelWriter;