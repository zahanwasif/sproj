import * as React from 'react';
import {useTheme} from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';

const Logo: React.FC = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <Text>Logo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Logo;
