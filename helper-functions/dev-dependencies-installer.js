const installer = require('./installer');

const devDependenciesInstaller = path => {
  const devDependencies = [
    '@babel/core',
    '@babel/plugin-proposal-class-properties',
    '@babel/preset-env',
    '@babel/preset-react',
    '@types/jest',
    'autoprefixer',
    'babel-eslint',
    'babel-loader',
    'clean-webpack-plugin',
    'css-loader',
    'eslint',
    'eslint-plugin-babel',
    'file-loader',
    'html-webpack-plugin',
    'jest',
    'postcss-loader',
    'postcss-nested',
    'style-loader',
    'url-loader',
    'webpack',
    'webpack-cli',
    'webpack-dev-server'
  ];
  installer('./', devDependencies, true);
};

module.exports = devDependenciesInstaller;