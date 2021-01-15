import firebase from './firebase';

const {auth} = firebase;

const getUser = () => {
  return new Promise((resolve, reject) => {
    try {
      var user = auth().currentUser;
      if (user) {
        resolve({name: user?.displayName, email: user?.email});
      } else {
        reject('user-not-signed-in');
      }
    } catch (error) {
      console.log(error);
      reject('user-not-signed-in');
    }
  });
};

export default getUser;
