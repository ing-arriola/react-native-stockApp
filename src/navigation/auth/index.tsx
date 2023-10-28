import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NATIVE_LOGIN_SCREEN, WELCOME_SCREEN} from '../../screens/screen-names';
import {NativeLoginScreen, WelcomeScreen} from '../../screens';
import colors from '../../constants/colors';

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={WELCOME_SCREEN}>
      <AuthStack.Screen
        options={{headerShown: false}}
        name={WELCOME_SCREEN}
        component={WelcomeScreen}
      />
      <AuthStack.Screen
        options={{
          title: 'Native Login',
          headerTintColor: colors.white,
        }}
        name={NATIVE_LOGIN_SCREEN}
        component={NativeLoginScreen}
      />
    </AuthStack.Navigator>
  );
};
