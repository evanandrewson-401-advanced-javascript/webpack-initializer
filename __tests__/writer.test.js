const { write } = require('../writer');
const fs = require('fs');

fs.writeFileSync = jest.fn();

describe('file writer', () => {
  it('writes a file', () => {
    write('hello', './hello.txt');
    expect(fs.writeFileSync.mock.calls[0][0]).toBe('./hello.txt');
    expect(fs.writeFileSync.mock.calls[0][1]).toBe('hello');
  })
})