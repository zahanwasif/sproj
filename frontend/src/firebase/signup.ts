import firebase from './firebase';
import signin from './signin';

const {auth} = firebase;

const signUp = (email: string, passwprd: string, name: string) => {
  return new Promise((res, rej) => {
    auth()
      .createUserWithEmailAndPassword(email, passwprd)
      .then(async (user) => {
        var userState = auth().currentUser;
        try {
          await userState?.updateProfile({displayName: name});
          console.log(userState?.displayName);
        } catch (err) {
          console.log(err);
        }
        res('USer has signed in');
      })
      .catch((error: any) => {
        if (error.code === 'auth/email-already-in-use') {
          rej({
            code: 'That email address is already in use!',
            message:
              'Please try a email which is not aleady registered with us.',
          });
        }

        if (error.code === 'auth/invalid-email') {
          rej({
            code: 'That email address is invalid!',
            message:
              'Please try a valid email address to register on the application.',
          });
        }

        if (error.code === 'auth/weak-password') {
          rej({
            code: 'The passwond is so weak',
            message:
              'Please try a strong password that contains uppercase, lowercase, symbols and numbers ',
          });
        }
      });
  });
};
export default signUp;
