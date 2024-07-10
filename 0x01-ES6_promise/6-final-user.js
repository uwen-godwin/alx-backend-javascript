import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles profile signup by signing up a user and uploading a photo.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The file name of the photo to upload.
 * @returns {Promise<Array>} A promise that resolves with an array of results.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Execute both promises concurrently and return the combined result.
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
}
