import { uploadPhoto, createUser } from './utils';

const p = uploadPhoto();
const newUser = createUser();
export default function handleProfileSignup() {
  Promise.all([p, newUser])
    .then((values) => console.log(values[0].body, values[1].firstName, values[1].lastName))
    .catch(() => console.log('Signup system offline'));
}
