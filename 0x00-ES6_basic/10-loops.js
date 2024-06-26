export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) { // Changed var to let for block scope and used for...of
    value = appendString + value;
  }

  return array;
}
