import React from 'react';
import { NavigationContainer as BaseNavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './RootStackNavigator';
import { AuthStackNavigator } from './AuthStackNavigator';

import { useAppDispatch, useAppSelector } from '@state';

export const NavigationContainer = () => {
  // const isLoggedIn  = false
  const { user } = useAppSelector((state) => state.user);
  // const isLoggedIn = true;

  return (
    <BaseNavigationContainer>
      {user !== null ? <RootStackNavigator /> : <AuthStackNavigator />}
    </BaseNavigationContainer>
  );
};

