import { Link } from "@react-navigation/native";
import { Field, Formik } from "formik";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-root-toast";
import CustomInput from "../../Components/CustomInput";
import LoginController from "../../Controllers/LoginController";
import { EMPTY_STRING } from "../../constants";
import { LoginType } from "../../types";
import { loginValidationSchema } from "./loginSchema";

export default function Login({ navigation }) {
  const onSubmit = async (data: LoginType): Promise<void> => {
    const response = await LoginController(data);
    if (response.code !== 200) {
      Toast.show(`${response.msg}` ?? "login: error", {
        duration: Toast.durations.LONG,
        backgroundColor: "#ED4242",
        textColor: "#fff",
      });
      return;
    }
    Toast.show("Login efetuado com sucesso", {
      duration: Toast.durations.LONG,
      backgroundColor: "#3DA008",
      textColor: "#fff",
    });
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Login</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: EMPTY_STRING, password: EMPTY_STRING }}
        onSubmit={onSubmit}
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
      <Link
        to={{ screen: "Register" }}
        style={{ ...styles.label, textAlign: "center", fontSize: 16 }}
      >
        Ainda não é um membro? Registra-se
      </Link>
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
