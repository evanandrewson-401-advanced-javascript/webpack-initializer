const installer = (path, packagesArray, devBoolean) => {
  const { execSync } = require('child_process');
  let command = 'npm i'
  if(devBoolean) {
    command += ' -D'
  }
  console.log('beginning install');
  packagesArray.forEach(entry => {
    execSync(`npm i ${entry}`, {
      cwd: path,
      stdio: 'inherit'
    });
  });
  console.log('finished install');
}

module.exports = installer;