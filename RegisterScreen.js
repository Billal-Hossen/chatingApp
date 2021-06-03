import React, { useLayoutEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "./firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      hederBackTitle: "Back to Login",
    });
  }, [navigation]);
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://cdn1.vectorstock.com/i/1000x1000/90/35/avatar-men-design-vector-14499035.jpg",
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={StyleSheet.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a GroupChat account
      </Text>
      <View style={StyleSheet.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          autoFocus
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          autoFocus
          type="text"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL(optional)"
          autoFocus
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button raised onPress={register} title="Register"></Button>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
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
  inputContainer: {
    width: 300,
  },
});
