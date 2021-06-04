import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);
  const signIn = () => {
    auth
    .signInWithEmailAndPassword(email,password)
    .catch((error)=>alert(error));
  };
  return (
    <KeyboardAvoidingView behavior="Padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "data:image/png;base64,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",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="email"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button title="Login" onPress={signIn} containerStyle={styles.button} />
      <Button
        onPress={() => navigation.navigate("Register")}
        type="outline"
        title="Register"
        containerStyle={styles.button}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
// https://gruopchat.atlassian.net/jira/software/projects/GROUP/boards/1
