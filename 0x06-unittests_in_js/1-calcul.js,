function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    }
    const divide = Math.round(a) / Math.round(b);
    return divide;
  }
}

module.exports = calculateNumber;
