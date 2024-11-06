import { useNavigation } from '@react-navigation/native';
import { LoginNavigationProp } from 'navigation/types';

export const useLoginHelper = () => {
  const navigation = useNavigation<LoginNavigationProp>();

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return {
    navigateToSignUp,
  };
};
