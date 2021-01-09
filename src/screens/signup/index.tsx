import React, {FC, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import {useTheme} from 'react-native-paper';
import styles from './styles';
import signUp from '../../firebase/signup';
import {useNavigation} from '@react-navigation/native';

interface Props {}

const Signup: FC<Props> = () => {
  const {colors} = useTheme();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    if (name === '') {
      return Alert.alert(
        'Name is empty',
        'Please fill the above fields to proceed.',
      );
    }
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
    try {
      await signUp(email, password, name);
    } catch (error) {
      return Alert.alert(error.code, error.message);
    }
  };

  const handleSignin = () => {
    navigation.navigate('signin');
  };

  return (
    <View style={[{backgroundColor: colors.primary}, styles.container]}>
      <View style={styles.logoContainer}>
        <Text style={[styles.logo, {color: colors.accent}]}>Logo</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <Text style={[styles.header, {color: colors.accent}]}>Sign up</Text>
          <TextInput
            style={[
              styles.input,
              {color: colors.accent, borderColor: colors.accent},
            ]}
            placeholder="Name"
            onChangeText={(text) => setName(text)}
            defaultValue={name}
            placeholderTextColor="white"
          />
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
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: colors.accent, borderColor: colors.accent},
          ]}
          onPress={handleSignup}>
          <Text style={[styles.btnText, {color: colors.primary}]}>Sign up</Text>
        </TouchableOpacity>
        <View style={[styles.div, {borderBottomColor: colors.accent}]} />
        <TouchableOpacity
          onPress={handleSignin}
          style={[styles.sbutton, {borderColor: colors.accent}]}>
          <Text style={[styles.sbtnText, {color: colors.accent}]}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
