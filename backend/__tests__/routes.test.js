const request = require('supertest');
const express = require('express');

const routes = require('../routes');

let appRoutes;
describe('API routes', () => {
  beforeAll(() => {
    appRoutes = express().use(routes);
  })

  it('should be server is accessible', () => {
    request(appRoutes).get('/').then(data => {
      expect(data.status).toBe(200);
    });
  });
});
