import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/header';
import {useSelector} from 'react-redux';

const Settings = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <View>
      <Header />
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
};

export default Settings;
