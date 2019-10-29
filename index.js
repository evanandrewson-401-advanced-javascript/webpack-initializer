#!/usr/bin/env node
const fs = require('fs');
const babelWriter = require('./helper-functions/babel-writer');
const packageJsonWriter = require('./helper-functions/package-json-writer');
const dependenciesInstaller = require('./helper-functions/dependencies-installer');
const devDependenciesInstaller = require('./helper-functions/dev-dependencies-installer');
const eslintWriter = require('./helper-functions/eslint-writer');
const gitignoreWriter = require('./helper-functions/gitignore-writer');
const srcIndexWriter = require('./helper-functions/src-index-writer');
const travisWriter = require('./helper-functions/travis-writer');
const webpackWriter = require('./helper-functions/webpack-writer');

const path = process.argv[process.argv.length - 1];

if(path !== '.') {
  fs.mkdirSync(path);
}

fs.mkdirSync(`${path}/src`);

babelWriter(`${path}/.babelrc`);
packageJsonWriter(`${path}/package.json`);
dependenciesInstaller(`${path}`);
devDependenciesInstaller(`${path}`);
eslintWriter(`${path}/.eslintrc`);
gitignoreWriter(`${path}/.gitignore`);
srcIndexWriter(`${path}/src/index.js`, `${path}/src/index.html`);
travisWriter(`${path}/.travis.yml`);
webpackWriter(`${path}webpack.config.js`);