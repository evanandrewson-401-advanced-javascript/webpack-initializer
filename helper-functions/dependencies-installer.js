const installer = require('./installer');

const dependenciesInstaller = path => {
  const dependencies = [
    'react',
    'react-dom'
  ];
  installer('./', dependencies, false);
};

module.exports = dependenciesInstaller;