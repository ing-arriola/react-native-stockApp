import React from 'react';
import {Fragment} from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, View, ViewProps, SafeAreaView} from 'react-native';
import {colors} from '../constants';
interface ScreenProps extends ViewProps {
  scrollable?: boolean;
  safeView?: boolean;
  alignment?: 'center' | 'start' | 'end';
}

export const Screen: React.FC<ScreenProps> = ({
  scrollable = true,
  safeView = true,
  style,
  children,
  alignment = 'center',
}) => {
  const styleAlignment = styles[alignment];
  const SafeContainer = safeView ? SafeAreaView : Fragment;
  if (scrollable) {
    return (
      <ScrollView
        contentContainerStyle={[styles.container, styleAlignment, style]}>
        <SafeContainer>{children}</SafeContainer>
      </ScrollView>
    );
  }

  return (
    <View style={[styles.container, styleAlignment, style]}>
      <SafeContainer>{children}</SafeContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  end: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
