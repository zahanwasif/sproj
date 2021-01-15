import * as React from 'react';
import {useTheme, ActivityIndicator} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

interface AIprops {
  animating: boolean | undefined;
  color: string | undefined;
  size: number | string;
}

const Loading: React.FC = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <ActivityIndicator animating={true} size={70} color={colors.accent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Loading;
