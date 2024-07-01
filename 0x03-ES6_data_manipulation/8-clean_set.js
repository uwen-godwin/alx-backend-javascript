export default function cleanSet(set, startString) {
  const parts = [];
  if (startString && typeof startString === 'string') {
    for (const value of set) {
      if (value.startsWith(startString)) {
        parts.push(value.slice(startString.length));
      }
    }
  }
  return parts.join('-');
}
