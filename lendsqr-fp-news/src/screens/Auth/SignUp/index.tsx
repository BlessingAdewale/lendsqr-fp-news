import React from 'react';
import { Alert, Keyboard, StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { Button, CheckBox, TextInput, themeColor } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
import { layout } from '@utils';
import { globalStyles } from '@globalStyles';
import { useSignUpHelper } from './useSignUpHelper';
import { SubHeading } from '@components';

export const SignUp = () => {
  const { navigateToSignUp2 } = useSignUpHelper();

  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [checkBox, setCheckbox] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textHello}>
        Hello {'\n'}
        <Text style={globalStyles.textThere}>there!</Text>
      </Text>

      <SubHeading
        content="Create an account to access news around the world  and get real-time updates on unmissable
        headlines"
      />
      <TextInput
        placeholder="Enter your full name"
        value={fullName}
        autoCapitalize="none"
        onChangeText={(val) => setFullName(val)}
        borderRadius={25}
        collapsable={true}
        clearTextOnFocus
        clearButtonMode="while-editing"
        selectionColor={'#ef4046'}
        containerStyle={{ paddingVertical: 10, borderWidth: 0.8 }}
        leftContent={
          <Ionicons
            name="person-outline"
            size={20}
            color={themeColor.black300}
            style={globalStyles.leftContent}
          />
        }
      />
      <TextInput
        placeholder="Enter your phone number"
        value={phoneNumber}
        autoCapitalize="none"
        onChangeText={(val) => setPhoneNumber(val)}
        borderRadius={25}
        collapsable={true}
        clearTextOnFocus
        clearButtonMode="while-editing"
        selectionColor={'#ef4046'}
        containerStyle={{ paddingVertical: 10, borderWidth: 0.8, marginTop: 20 }}
        leftContent={
          <Ionicons
            name="phone-portrait-outline"
            size={20}
            color={themeColor.black300}
            style={globalStyles.leftContent}
          />
        }
      />

      <TextInput
        placeholder="Enter your email"
        value={email}
        autoCapitalize="none"
        onChangeText={(val) => setEmail(val)}
        borderRadius={25}
        collapsable={true}
        clearTextOnFocus
        clearButtonMode="while-editing"
        selectionColor={'#ef4046'}
        containerStyle={{ paddingVertical: 10, borderWidth: 0.8, marginTop: 20 }}
        leftContent={
          <Ionicons
            name="mail-outline"
            size={20}
            color={themeColor.black300}
            style={globalStyles.leftContent}
          />
        }
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <CheckBox
          value={checkBox}
          onValueChange={(val) => setCheckbox(val)}
          size={17}
          checkedColor={'#ef4046'}
        />
        <Text style={{ marginLeft: 10, color: 'gray' }}>
          By signing up you agree to our{' '}
          <Text style={globalStyles.textTerms}>Terms of Service</Text> and
          {'\n'}
          <Text style={globalStyles.textTerms}>Privacy Policies </Text>
        </Text>
      </View>
      <ActivityIndicator animating={loading} size="large" color="#ef4046" />
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>
          <Button
            text="Sign Up"
            size="lg"
            color="#ef4046"
            onPress={navigateToSignUp2}
            style={{
              paddingHorizontal: 160,
              paddingVertical: 15,
              borderRadius: 23,
            }}
          />
          ;
        </Text>
      </View>
    </View>
  );
};
