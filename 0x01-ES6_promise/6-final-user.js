// Import the required functions
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Implement and export the handleProfileSignup function
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the signUpUser and uploadPhoto functions with the provided arguments
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to wait for both promises to settle and return their results
  return Promise.allSettled([userPromise, photoPromise])
    .then(results => results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
