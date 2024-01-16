import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.container}>
        <Text style={styles.inputLabel}>Name:</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
        <Text style={styles.inputLabel}>Email:</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
        <Text style={styles.inputLabel}>Senha:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
        <Text style={styles.inputLabel}>Confirmar senha:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("pressed button")}
      >
        <Text style={{ ...styles.inputLabel, color: "#fff" }}>Registrar</Text>
      </TouchableOpacity>
      <Text style={{ ...styles.inputLabel, textAlign: "center" }}>
        Já está cadastrado? Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 40,
  },
  container: {},
  inputLabel: {
    fontSize: 15,
    fontWeight: "normal",
    paddingLeft: 12,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4682B4",
    padding: 15,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 10,
  },
});
