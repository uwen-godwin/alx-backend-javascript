/**
 * Appends handlers to the given Promise.
 * @param {Promise<any>} promise - The Promise to handle.
 * @returns {Promise<Object>} - Object with status and body attributes on resolve,
 *                              Empty Error object on reject.
 */
export default function handleResponseFromAPI(promise) {
  return promise.then(() => {
    console.log("Got a response from the API");
    return { status: 200, body: 'success' };
  }).catch(() => new Error());
}
