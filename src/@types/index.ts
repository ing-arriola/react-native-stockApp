import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  type AuthStackParams = {
    NativeLoginScreen: undefined;
    WelcomeScreen: undefined;
  };

  type HomeStackParams = {
    HomeScreen: undefined;
  };
}

export type WelcomeScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'WelcomeScreen'
>;
