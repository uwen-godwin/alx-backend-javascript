import Airport from './7-airport';

describe('Airport', () => {
  it('should create an Airport object', () => {
    const airportSF = new Airport('San Francisco Airport', 'SFO');
    expect(airportSF).toEqual(expect.objectContaining({
      _name: 'San Francisco Airport',
      _code: 'SFO'
    }));
  });

  it('should return correct string description', () => {
    const airportSF = new Airport('San Francisco Airport', 'SFO');
    expect(airportSF.toString()).toEqual('[object SFO]');
  });
});
