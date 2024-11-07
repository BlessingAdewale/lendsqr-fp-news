import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { layout } from '@utils';
//redux
import { login, logout, selectUser } from '../../../state/features';
import { useAppDispatch, useAppSelector } from '@state';

import { Button, themeColor } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

WebBrowser.maybeCompleteAuthSession();

type GoogleButtonProps = ScrollView['props'] & {
  marginTop: number;
  onPress: () => void;
};

export const GoogleButton = ({ marginTop, onPress }: GoogleButtonProps) => {

  const [userInfo, setUserInfo] = React.useState(null);

  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    responseType: 'id_token',
    expoClientId: Constants.manifest?.extra?.expoKey,
    iosClientId: Constants.manifest?.extra?.iosKey,
    // androidClientId: Constants.manifest?.extra?.androidKey,
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      dispatch(
        login({
          email: response.params.email,
          uid: response.params.uid,
          displayName: response.params.displayName,
          photoUrl: response.params.photoURL,
        }),
      );
      const { id_token } = response.params;
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }

    if (response?.type === 'error') {
      // User is signed out
      dispatch(logout());
    }
  }, [response]);

  return (
    <View
      style={{
        marginTop: layout.pixelSizeVertical(marginTop),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>
        <Button
          text="Sign in with Google"
          textStyle={{
            color: '#3e3e3e',
          }}
          size="lg"
          color={'transparent'}
          onPress={() => {
            promptAsync();
          }}
          leftContent={
            <Ionicons
              name="ios-logo-google"
              size={20}
              style={{
                paddingRight: 7,
              }}
              color={themeColor.success}
            />
          }
          style={{
            paddingHorizontal: 100,
            paddingVertical: 15,
            borderRadius: 23,
            borderColor: '#eaecf0',
            borderWidth: 1,
          }}
        />
        ;
      </Text>
    </View>
  );
};
