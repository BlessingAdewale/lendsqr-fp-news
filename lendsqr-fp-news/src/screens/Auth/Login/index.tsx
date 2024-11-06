import { ActivityIndicator, Keyboard, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-rapi-ui';
import { themeColor } from 'react-native-rapi-ui';
import { CheckBox } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import { GoogleButton, SubHeading } from '@components';
import { useLoginHelper } from './useLoginHelper';

export const Login = () => {
  const { navigateToSignUp } = useLoginHelper();

  const [loading, setLoading] = React.useState(false);
  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.textHello, { marginTop: layout.pixelSizeVertical(180) }]}>
        Welcome{'\n'}
        <Text style={globalStyles.textThere}>back, Blessing </Text>
      </Text>
      <SubHeading content=" Sign in to access your news history and get real-time updates on all your local news" />
      <ActivityIndicator animating={loading} size="large" color="#ef4046" />

      <GoogleButton marginTop={10} onPress={() => null} />
      <Text style={globalStyles.bottomText}>
        Don't have an account?{' '}
        <Text onPress={navigateToSignUp} style={globalStyles.textTerms}>
          Create an account{' '}
        </Text>{' '}
      </Text>
    </View>
  );
};
