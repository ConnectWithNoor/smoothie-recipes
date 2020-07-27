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
        fav: [],
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

export const handleSignin = async ({ email, password }) => {
  try {
    const signInRef = db.doc(`/users/${email}`);

    const { exists } = await signInRef.get();

    if (!exists) throw new Error('User Does not exist');
    else {
      await auth.signInWithEmailAndPassword(email, password);

      return true;
    }
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};

export const handleAddFavourite = async (email, recipeID) => {
  try {
    const favRef = db.doc(`/users/${email}`);

    const UserSnap = await favRef.get();
    if (!UserSnap.exists)
      return alert(
        'You need to signin before marking this recipe as favourite.'
      );

    const userData = UserSnap.data();

    if (userData.fav.some((id) => id === recipeID))
      return alert('Already favourited');

    const newData = {
      ...userData,
      fav: [...userData?.fav, recipeID],
    };

    await favRef.set(newData);
    return alert('Added Recipe to Favourites');
  } catch (error) {
    console.log('error', error);
    alert('Something went wrong');
  }
};

export const handleLogout = async (email) => {
  try {
    // code here
    alert(email);
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
};
