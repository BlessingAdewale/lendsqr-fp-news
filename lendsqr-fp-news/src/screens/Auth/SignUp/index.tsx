import React from 'react';
import { Alert, Keyboard, StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { Button, CheckBox, TextInput, themeColor } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
import { layout } from '@utils';
import { globalStyles } from '@globalStyles';

export const SignUp = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [checkBox, setCheckbox] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textHello}>
        Hello {'\n'}
        <Text style={globalStyles.textThere}>there!</Text>
      </Text>

      <Text style={globalStyles.textCreate}>
        Create an account to access news around the world and get real-time updates on unmissable
        headlines
      </Text>

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
        containerStyle={{ paddingVertical: 10, borderWidth: 0.8 }}
        leftContent={
          <Ionicons
            name="mail-outline"
            size={20}
            color={themeColor.black300}
            style={globalStyles.leftContent}
          />
        }
      />

      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={(val) => setPassword(val)}
        borderRadius={25}
        autoCapitalize="none"
        collapsable={true}
        secureTextEntry={!showPassword}
        clearTextOnFocus
        selectionColor={'#ef4046'}
        containerStyle={{ paddingVertical: 10, marginTop: 20, borderWidth: 0.8, }}
        leftContent={
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color={themeColor.black300}
            style={globalStyles.leftContent}
          />
        }
        rightContent={
          <Ionicons
            name={showPassword ? 'ios-eye' : 'ios-eye-off-outline'}
            style={{ direction: 'rtl' }}
            size={20}
            color={themeColor.black300}
            onPress={() => {
              setShowPassword(!showPassword), () => Keyboard.dismiss();
            }}
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
          By signing up you agree to our <Text style={globalStyles.textTerms}>Terms of Service</Text> and
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
            onPress={() => null}
            style={{
              paddingHorizontal: 160,
              paddingVertical: 15,
              borderRadius: 23,
            }}
          />
          ;
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 24,
        }}
      >
        <View style={globalStyles.horizontalRule} />
        <View>
          <Text style={globalStyles.orSignUpWith}>Or</Text>
        </View>
        <View style={globalStyles.horizontalRule} />
      </View>
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
            text="Sign up using Google"
            textStyle={{
              color: '#3e3e3e',
            }}
            size="lg"
            color={'transparent'}
            onPress={() => console.log('Button tapped')}
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
              paddingHorizontal: 90,
              paddingVertical: 15,
              borderRadius: 23,
              borderColor: '#eaecf0',
              borderWidth: 0.8,
            }}
          />
          ;
        </Text>
      </View>
      <Text style={globalStyles.bottomText}>
        Already have an account?{' '}
        <Text onPress={() => null} style={globalStyles.textTerms}>
          Login
        </Text>{' '}
      </Text>
    </View>
  );
};

