import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Connected from '../screens/connected.devices';
import Settings from '../screens/settings';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Connected} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTab;
