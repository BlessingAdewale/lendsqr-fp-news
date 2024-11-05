import { ActivityIndicator, Keyboard, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from "react-native-rapi-ui";
import { themeColor } from "react-native-rapi-ui";
import { CheckBox } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from '@globalStyles';

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [checkBox, setCheckbox] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.textHello}>
      Welcome{"\n"}
      <Text style={globalStyles.textThere}>back!</Text>
    </Text>

    <Text style={globalStyles.textCreate}>
      Sign in to access your news history and get real-time updates on all
      your local news
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
      selectionColor={"#ef4046"}
      containerStyle={{ paddingVertical: 10 }}
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
      selectionColor={"#ef4046"}
      containerStyle={{ paddingVertical: 10, marginTop: 20 }}
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
          name={showPassword ? "ios-eye" : "ios-eye-off-outline"}
          style={{ direction: "rtl" }}
          size={20}
          color={themeColor.black300}
          onPress={() => {
            setShowPassword(!showPassword), () => Keyboard.dismiss();
          }}
        />
      }
    />

    <View
      style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
    >
      <CheckBox
        value={checkBox}
        onValueChange={(val) => setCheckbox(val)}
        size={17}
        checkedColor={"#ef4046"}
      />
      <Text style={{ marginLeft: 10, color: "gray" }}>Remember me</Text>
    </View>
    <ActivityIndicator animating={loading} size="large" color="#ef4046" />
    <View
      style={{
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        <Button
          text="Sign In"
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
        flexDirection: "row",
        alignItems: "center",
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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        <Button
          text="Continue with Google"
          textStyle={{
            color: "#3e3e3e",
          }}
          size="lg"
          color={"transparent"}
          onPress={() => console.log("Button tapped")}
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
            borderColor: "#eaecf0",
            borderWidth: 1,
          }}
        />
        ;
      </Text>
    </View>
    <Text style={globalStyles.bottomText}>
      Don't have an account?{" "}
      <Text
        onPress={() => null}
        style={globalStyles.textTerms}
      >
        Create an account{" "}
      </Text>{" "}
    </Text>
  </View>
  )
}



const styles = StyleSheet.create({})