import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Screen} from '../../components';
import {LOGO} from '../../assets';
import {useAuth} from '../../hooks';

type WelcomeScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'WelcomeScreen'
>;

interface WelcomeProps extends WelcomeScreenProps {}

export const WelcomeScreen: React.FC<WelcomeProps> = ({navigation}) => {
  const {navigate} = navigation;
  const onNativeLogin = () => navigate('NativeLoginScreen');
  const {webLogin} = useAuth();

  return (
    <Screen>
      <Image source={LOGO} style={styles.logo} />
      <Text style={styles.title}>
        Authentication with Auth0 and React Native
      </Text>
      <View style={styles.buttonsContainer}>
        <Button label="Browser based" onPress={webLogin} size="small" />
        <Button label="Native Login" onPress={onNativeLogin} size="small" />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});
