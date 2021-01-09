import React, {FC} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import store from '../redux/store';
import {initialState} from '../redux/reducers/userReducer';

import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import signOut from '../firebase/signout';
import {useSelector} from 'react-redux';

const DrawerContent = (props: DrawerContentComponentProps) => {
  // const user = useSelector((state: any) => state.user);
  const state = store.getState();
  const {user} = state;
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
        <View>
          <View>
            <Avatar.Image
              source={{
                uri: `https://avatars.abstractapi.com/v1/?api_key=ee28f1cd77de4961a377f46ca59624f0&name=${user?.name}`,
              }}
              size={50}
            />
            <View style={{marginLeft: 15, flexDirection: 'column'}}>
              <Text>{user?.name}</Text>
              <Text>{user?.email}</Text>
            </View>
          </View>
          <Drawer.Section>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Connected Devices"
              onPress={() => {
                props.navigation.navigate('connected');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('settings');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;
