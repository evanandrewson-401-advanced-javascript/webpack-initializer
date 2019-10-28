const { write } = require('../helper-functions/writer');
const fs = require('fs');

fs.writeFileSync = jest.fn();

describe('file writer', () => {
  it('write calls the expected variables', () => {
    write('hello', './hello.txt');
    expect(fs.writeFileSync.mock.calls[0][0]).toBe('./hello.txt');
    expect(fs.writeFileSync.mock.calls[0][1]).toEqual('hello');
  })
})