import React, {FC, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import {useTheme} from 'react-native-paper';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import signIn from '../../firebase/signin';
import {useDispatch} from 'react-redux';
import {signInWithDispatch} from '../../redux/actions/actions';

const Signin: FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {colors} = useTheme();
  const navigation = useNavigation();

  const handleSignup = () => {
    navigation.navigate('signup');
  };

  const handleSignin = () => {
    if (email === '') {
      return Alert.alert(
        'Email is empty',
        'Please fill the above fields to proceed.',
      );
    }
    if (password === '') {
      return Alert.alert(
        'Password is empty',
        'Please fill the above fields to proceed.',
      );
    }
    signIn(email, password)
      .then(() => {
        dispatch(signInWithDispatch());
      })
      .catch((err) => {
        Alert.alert(err.code, err.message);
      });
  };

  return (
    <View style={[{backgroundColor: colors.primary}, styles.container]}>
      <View style={styles.logoContainer}>
        <Text style={[styles.logo, {color: colors.accent}]}>Logo</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <Text style={[styles.header, {color: colors.accent}]}>Sign in</Text>
          <TextInput
            style={[
              styles.input,
              {color: colors.accent, borderColor: colors.accent},
            ]}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            defaultValue={email}
            placeholderTextColor="white"
          />
          <TextInput
            style={[
              styles.input,
              {color: colors.accent, borderColor: colors.accent},
            ]}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
            placeholderTextColor="white"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.forgot}>
            <Text style={[styles.sbtnText, {color: colors.accent}]}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignin}
          style={[
            styles.button,
            {backgroundColor: colors.accent, borderColor: colors.accent},
          ]}>
          <Text style={[styles.btnText, {color: colors.primary}]}>Sign in</Text>
        </TouchableOpacity>
        <View style={[styles.div, {borderBottomColor: colors.accent}]} />
        <TouchableOpacity
          onPress={handleSignup}
          style={[styles.sbutton, {borderColor: colors.accent}]}>
          <Text style={[styles.sbtnText, {color: colors.accent}]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;
