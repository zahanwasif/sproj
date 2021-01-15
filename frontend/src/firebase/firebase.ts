import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDKbr50d9ij3hqohY0Zv2w210nI48imsgc',
  authDomain: 'sproj-8083a.firebaseapp.com',
  databaseURL: 'https://sproj-8083a.firebaseio.com',
  projectId: 'sproj-8083a',
  storageBucket: 'sproj-8083a.appspot.com',
  messagingSenderId: '1066902975409',
  appId: '1:1066902975409:web:68cbb78f47272035c90390',
  measurementId: 'G-C9JC84G3BK',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
