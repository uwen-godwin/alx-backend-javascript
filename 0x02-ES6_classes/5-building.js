export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Abstract classes cannot be instantiated');
    }

    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Classes extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = newSqft;
  }
}
