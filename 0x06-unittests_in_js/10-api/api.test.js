const request = require('request');
const { expect } = require('chai');

describe('API testing with mocha', () => {
  const url = 'http://localhost:7865';
  const cart = 'http://localhost:7865/cart/12';
  const payment = 'http://localhost:7865/available_payments';

  it('returns the status code', (done) => {
    request.get(cart, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns the correct message', (done) => {
    request.get(cart, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('checks if the request parameter is an Integer', () => {
    request.get(cart, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('checks if the request parameter is a string', (done) => {
    request.get("http://localhost:7865/cart/this", (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('checks for deep equals', (done) => {
    request.get(payment, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('checks for deep equality', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.deep.equal(200);
      done();
    });
  })

  it('checks for deep equality of body response for the /available_payments', (done) => {
    request.get(payment, (error, response, body) => {
      expect(JSON.parse(body)).to.deep
    .equal({"payment_method":{"credit_cards":true,"paypal":false}});
    done();
    })
  })

  it('checks for the logged in user and prints a welcome message', (done) => {
    request.post({url: "http://localhost:7865/login", json: {userName: "Lawson"}, headers: {"Content-Type": "application/json"}}, (error, response, body) => {
      expect(response.statusCode).to.deep.equal(201);
      expect(body).to.deep.equal("Welcome Godwin");
      done();
    })
  })
});
