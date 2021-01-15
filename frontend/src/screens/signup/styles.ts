import {StyleSheet} from 'react-native';

import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  logoContainer: {
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: height * 0.4,
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  inputContainer: {},
  input: {
    fontSize: 18,

    borderWidth: 0,
    borderBottomWidth: 2,
    paddingLeft: 20,
    marginVertical: 20,
    fontFamily: 'Roboto',
  },
  buttonContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    width: '95%',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 10,
    padding: 25,
  },
  sbutton: {
    borderWidth: 2,
    width: '95%',
    alignItems: 'center',
    marginVertical: 15,

    borderRadius: 10,
    padding: 25,
  },
  div: {
    borderBottomWidth: 2,
    width: '90%',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sbtnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgot: {
    flexDirection: 'row-reverse',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
