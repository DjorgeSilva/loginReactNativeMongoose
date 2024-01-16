import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Login</Text>
      <View>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
