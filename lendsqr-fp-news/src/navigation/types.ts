import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  HomeStack: undefined;
  NewsDetails: undefined;
};
export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type MainBottomTabParamList = {
  Home: undefined;
  World: undefined;
  Bookmark: undefined;
  Profile: undefined;
};

export type LoginNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;
export type SignUpNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignUp'>;

export type HomeTabNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeStack'>;

export type HomeNavigationProp = NativeStackNavigationProp<MainBottomTabParamList, 'Home'>;
export type WorldNavigationProp = NativeStackNavigationProp<MainBottomTabParamList, 'World'>;
export type BookmarkNavigationProp = NativeStackNavigationProp<MainBottomTabParamList, 'Bookmark'>;
export type ProfileNavigationProp = NativeStackNavigationProp<MainBottomTabParamList, 'Profile'>;
