const request = require('request');
const { expect } = require('chai');

describe('API testing with mocha', () => {
  const url = 'http://localhost:7865';
  it('returns the status code and the data', () => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('returns the correct message', () => {
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});
