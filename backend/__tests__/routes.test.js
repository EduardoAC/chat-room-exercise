const request = require('supertest')
const routes = require('../routes');

describe('Server application', () => {
  it('GET / will return hello world', () => {
    request(routes).get('/').then(data => {
      expect(data.text).toBe('hello world!');
    });
  });
});
