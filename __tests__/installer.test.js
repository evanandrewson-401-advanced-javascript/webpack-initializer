const child_process = require('child_process');
const installer = require('../helper-functions/installer');

child_process.execSync = jest.fn();

describe('installer', () => {
  it('install calls the expected variables', () => {
    const path = './'
    const packagesArray = ['eslint', 'jest', 'superagent']
    installer(path, packagesArray, false);
    expect(child_process.execSync.mock.calls.length).toBe(packagesArray.length);
    expect(child_process.execSync.mock.calls[0][0]).toBe(`npm i ${packagesArray[0]}`);
    expect(child_process.execSync.mock.calls[0][1]).toEqual({ cwd: path, stdio: 'inherit' });
    expect(child_process.execSync.mock.calls[1][0]).toBe(`npm i ${packagesArray[1]}`);
    expect(child_process.execSync.mock.calls[1][1]).toEqual({ cwd: path, stdio: 'inherit' });
    expect(child_process.execSync.mock.calls[2][0]).toBe(`npm i ${packagesArray[2]}`);
    expect(child_process.execSync.mock.calls[2][1]).toEqual({ cwd: path, stdio: 'inherit' });
  })

})