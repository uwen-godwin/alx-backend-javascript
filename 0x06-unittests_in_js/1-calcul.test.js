const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('Test for mathematical operations', function() {
  it('#sums', function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('Sums float nums', function() {
    assert.equal(calculateNumber('SUM', 1.4, 1.4), 2);
  });
  it('SUMs Negative nums', function() {
    assert.equal(calculateNumber('SUM', -3, -4), -7);
  });
  it('Divides', function() {
    assert.equal(calculateNumber('DIVIDE',1.4, 4.5), 0.2);
  });
  it('Divides', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it('Subtract from denominator', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
})
