import React from 'react';
import {useAuth} from '../hooks';
import {AuthNavigator} from './auth';
import {TabNavigator} from './main';

export const MainNavigator = () => {
  const {isLoggedIn} = useAuth();
  console.log('isLoggedIn', isLoggedIn);

  if (isLoggedIn) {
    return <TabNavigator />;
  }

  return <AuthNavigator />;
};
