import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '@globalStyles';
import { Button } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
import { themeColor } from 'react-native-rapi-ui';
import { GoogleButton } from '@components';

export const SignUp2 = () => {
  return (
    <View style={[globalStyles.container, globalStyles.columnCenter]}>
      <Text style={[globalStyles.textCreate]}>Welcome Adeleke Blessing Adewale </Text>

      <GoogleButton marginTop={0} onPress={() => null} />
    </View>
  );
};
