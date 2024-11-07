import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { layout } from '@utils';
import { Button, themeColor } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';

type GoogleButtonProps = ScrollView['props'] & {
  marginTop: number;
  onPress: () => void;
};

export const GoogleButton = ({ marginTop, onPress }: GoogleButtonProps) => {
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
          onPress={onPress}
  
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
