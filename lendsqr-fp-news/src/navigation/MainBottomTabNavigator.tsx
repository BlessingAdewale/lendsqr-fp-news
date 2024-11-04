import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Bookmark, World, Home, Profile } from '@screens';
import { MainBottomTabParamList } from './types';
// import { colors } from '@constants';

const MainBottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigator = () => {
  return (
    <MainBottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainBottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'grid' : 'grid-outline'} size={20} color={color} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="World"
        component={World}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={20} color={color} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'ios-heart' : 'ios-heart-outline'} size={20} color={color} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name={focused ? 'user' : 'user-o'} size={20} color={color} />
          ),
        }}
      />
    </MainBottomTab.Navigator>
  );
};
