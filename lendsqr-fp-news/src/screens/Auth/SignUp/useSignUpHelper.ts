import { useNavigation } from '@react-navigation/native';
import { SignUpNavigationProp } from 'navigation/types';

export const useSignUpHelper = () => {
  const navigation = useNavigation<SignUpNavigationProp>();

  const navigateToSignUp2 = () => {
    navigation.navigate('SignUp2');
  };

  return {
    navigateToSignUp2,
  };
};
