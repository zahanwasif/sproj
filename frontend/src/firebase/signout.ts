import firebase from './firebase';

const {auth} = firebase;

const signOut = () => {
  return new Promise((resolve, reject) => {
    auth()
      .signOut()
      .then(() => {
        resolve('User has signed out');
      })
      .catch((error) => {
        reject({
          code: error.code,
          message: 'An error occured while signing out',
        });
      });
  });
};

export default signOut;
