import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import { SignUp, Login, SignUp2 } from '@screens';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SignUp2" component={SignUp2} />
    </AuthStack.Navigator>
  );
};
