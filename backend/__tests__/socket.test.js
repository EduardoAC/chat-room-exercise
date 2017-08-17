const ioClient = require('socket.io-client');
const app = require('express')();
const server = require('http').Server(app);
const ioServer = require('socket.io')(server);

const socketSetup = require('../socket');
socketSetup(ioServer);
const serverUrl = 'http://localhost:4001';
const options = {
  'force new connection': true
}
let client;
describe('Socket connection', () => {
  beforeAll(() => {
    server.listen(4001);
  })
  afterAll(() => {
    server.close();
  })
  it('should echo message sent', (done) => {
    client = ioClient.connect(serverUrl, options);
    client.once('message', (msg) => {
      expect(msg).toBe('Hello chatters');
      client.disconnect();
      done();
    });
    client.emit('message', 'Hello chatters');
  });
});
