import { db, auth } from './firebase';

export const handleRegister = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  try {
    const regRef = db.doc(`/users/${email}`);

    const { exists } = await regRef.get();

    if (exists) throw new Error('Already Registered');
    else {
      const newUser = {
        email: email,
        firstName: firstName,
        lastName: lastName,
      };

      await auth.createUserWithEmailAndPassword(email, password);
      await regRef.set(newUser);

      return true;
    }
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};
