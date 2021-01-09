import firebase from './firebase';
const {auth} = firebase;

const signin = (email: string, password: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      resolve('user-signed-in');
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        reject({
          code: 'Email is invalid',
          message: 'Please try a valid email address to login the application.',
        });
      }
      if (error.code === 'auth/user-not-found') {
        reject({
          code: 'User not found',
          message:
            'The above email is not yet registered with the application.',
        });
      }
      if (error.code === 'auth/wrong-password') {
        reject({
          code: 'Password is wrong',
          message: 'Please try with a different password.',
        });
      }
    }
  });
};
export default signin;
