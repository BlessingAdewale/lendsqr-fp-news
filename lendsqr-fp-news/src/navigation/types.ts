import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { ItemProps } from '@screens';

export type RootStackParamList = {
  HomeStack: any;
  NewsDetails: any;
};
export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  SignUp2: undefined;
};

export type MainBottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

export type LoginNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;
export type SignUpNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignUp'>;
export type SignUp2NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignUp2'>;

export type HomeTabNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeStack'>;
export type HomeTabRouteProp = RouteProp<RootStackParamList, 'HomeStack'>;
export type NewsDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'NewsDetails'
>;
export type NewsDetailsRouteProp = RouteProp<RootStackParamList, 'NewsDetails'>;

export type HomeNavigationProp = NativeStackNavigationProp<MainBottomTabParamList, 'Home'>;
export type WorldNavigationProp = NativeStackNavigationProp<MainBottomTabParamList, 'Search'>;
export type ProfileNavigationProp = NativeStackNavigationProp<MainBottomTabParamList, 'Profile'>;
