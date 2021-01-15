import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Menu from '../svgs/menu.svg';
import Logout from '../svgs/logout.svg';
import {useNavigation} from '@react-navigation/native';
import signOut from '../firebase/signout';

const Header: FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.root}>
      <View style={styles.menuContainer}>
        <View style={styles.svgContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Menu height="100%" width="100%" style={styles.svg} />
          </TouchableOpacity>
        </View>
        <View style={styles.svgContainer}>
          <TouchableOpacity onPress={signOut}>
            <Logout height="100%" width="100%" style={styles.svg} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    height: 70,
  },
  menuContainer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
  },
  svgContainer: {
    height: 35,
    width: 35,
  },
  svg: {
    opacity: 1,
  },
});
