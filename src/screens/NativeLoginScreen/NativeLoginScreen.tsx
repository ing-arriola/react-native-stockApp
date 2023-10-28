import React from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
  View,
} from 'react-native';
import {Button, Screen} from '../../components';
import colors from '../../constants/colors';
import {useState} from 'react';
import {useAuth} from '../../hooks';

export const NativeLoginScreen = () => {
  const {nativeLogin, loading} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (email.trim() === '') {
      Alert.alert('Validation error', 'Email must not be empty');
      return;
    }

    if (password.trim() === '') {
      Alert.alert('Validation error', 'Passwrod must not be empty');
      return;
    }

    nativeLogin(email, password);
  };

  return (
    <Screen>
      <Text style={styles.title}>Sign up and Login with Auth0</Text>
      <TextInput
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
      />
      {loading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <View>
          <Button label="Sign up" onPress={onSubmit} size="small" />
        </View>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
  },
});
