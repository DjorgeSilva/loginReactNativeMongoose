import { Field, Formik } from "formik";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomInput from "../../Components/CustomInput";
import LoginController from "../../Controllers/LoginController";
import { EMPTY_STRING } from "../../constants";
import { loginValidationSchema } from "./loginSchema";

export default function Login() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Login</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: EMPTY_STRING, password: EMPTY_STRING }}
        onSubmit={LoginController}
      >
        {({ handleSubmit, isValid }) => (
          <View style={styles.container}>
            <Text style={styles.label}>Email:</Text>
            <Field component={CustomInput} name="email" />
            <Text style={styles.label}>Senha:</Text>
            <Field component={CustomInput} name="password" />

            <TouchableOpacity
              onPress={() => handleSubmit()}
              disabled={!isValid}
              style={styles.button}
            >
              <Text style={{ ...styles.label, color: "#fff" }}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
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
    color: "#4682B4",
    marginBottom: 20,
    marginLeft: 10,
  },
  container: {
    marginRight: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "normal",
    paddingLeft: 12,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4682B4",
    padding: 15,
    marginLeft: 12,
    marginRight: -12,
    marginTop: 30,
    marginBottom: 25,
    borderRadius: 10,
  },
});
