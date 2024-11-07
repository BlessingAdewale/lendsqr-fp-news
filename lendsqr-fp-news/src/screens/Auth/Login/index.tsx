import { ActivityIndicator, Keyboard, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import { GoogleButton, SubHeading } from '@components';
import { useLoginHelper } from './useLoginHelper';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

WebBrowser.maybeCompleteAuthSession();

export const Login = () => {
  const { navigateToSignUp } = useLoginHelper();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    responseType: 'id_token',
    expoClientId: Constants.manifest?.extra?.expoKey,
    iosClientId: Constants.manifest?.extra?.iosKey,
    // androidClientId: Constants.manifest?.extra?.androidKey,
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  const [loading, setLoading] = React.useState(false);
  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.textHello, { marginTop: layout.pixelSizeVertical(180) }]}>
        Welcome{'\n'}
        <Text style={globalStyles.textThere}>back, Blessing </Text>
      </Text>
      <SubHeading content=" Sign in to access your news history and get real-time updates on all your local news" />
      <ActivityIndicator animating={loading} size="large" color="#ef4046" />

      <GoogleButton
        marginTop={10}
        onPress={() => {
          promptAsync();
        } }
      />
      <Text style={globalStyles.bottomText}>
        Don't have an account?{' '}
        <Text onPress={navigateToSignUp} style={globalStyles.textTerms}>
          Create an account{' '}
        </Text>{' '}
      </Text>
    </View>
  );
};
