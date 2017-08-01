const request = require('supertest')
const app = require('./app');

describe('Server application', () => {
  it('GET / will return hello world', () => {
    request(app).get('/').then(data => {
      expect(data.text).toBe('hello world!');
    });
  });
});
