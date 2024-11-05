import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Search, Home, Profile } from '@screens';
import { MainBottomTabParamList } from './types';
// import { colors } from '@constants';

const MainBottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigator = () => {
  return (
    <MainBottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#110',
        tabBarInactiveTintColor: '#252503'
      }}
    >
      <MainBottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons name={focused ? 'home-filled' : 'home-filled'} size={25} color={color} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} size={25} color={color} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons name={focused ? 'person' : 'person-outline'} size={25} color={color} />
          ),
        }}
      />
    </MainBottomTab.Navigator>
  );
};
