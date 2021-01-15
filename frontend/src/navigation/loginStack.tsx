import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../screens/signin';
import Signup from '../screens/signup';

const Stack = createStackNavigator();

const LoginStack = () => (
  <Stack.Navigator
    initialRouteName="signin"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="signin" component={Signin} />
    <Stack.Screen name="signup" component={Signup} />
  </Stack.Navigator>
);

export default LoginStack;
