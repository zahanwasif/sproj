import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Connected from '../screens/connected.devices';
import DrawerContent from './drawerContent';
import Settings from '../screens/settings';

const Drawer = createDrawerNavigator();

const MyDrawer: FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="connected" component={Connected} />
      <Drawer.Screen name="settings" component={Settings} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
