import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    console.error("Error occurred during async operations:", error);
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;
