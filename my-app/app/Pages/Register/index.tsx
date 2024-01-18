import { Link } from "@react-navigation/native";
import { Field, Formik } from "formik";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-root-toast";
import CustomInput from "../../Components/CustomInput";
import registerUserPost from "../../Controllers/RegisterController";
import { EMPTY_STRING } from "../../constants";
import { ApiResponseType, RegisterType } from "../../types";
import { registerValidationSchema } from "./registerSchema";

export default function Register({ navigation }) {
  const onSubmit = async (data: RegisterType): Promise<void> => {
    const response: ApiResponseType = await registerUserPost(data);
    if (response.code !== 200) {
      Toast.show(`${response.msg}` ?? "cadastrar: error", {
        duration: Toast.durations.LONG,
        backgroundColor: "#ED4242",
        textColor: "#fff",
      });
      return;
    }
    Toast.show("Registrado com sucesso", {
      duration: Toast.durations.LONG,
      backgroundColor: "#3DA008",
      textColor: "#fff",
    });
    navigation.navigate("Login");
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Registrar</Text>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          name: EMPTY_STRING,
          email: EMPTY_STRING,
          password: EMPTY_STRING,
          confirmPassword: EMPTY_STRING,
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, isValid }) => (
          <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <Field component={CustomInput} name="name" />
            <Text style={styles.label}>Email:</Text>
            <Field component={CustomInput} name="email" />
            <Text style={styles.label}>Senha:</Text>
            <Field component={CustomInput} name="password" />
            <Text style={styles.label}>Confirmar senha:</Text>
            <Field component={CustomInput} name="confirmPassword" />
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
              disabled={!isValid}
            >
              <Text style={{ ...styles.label, color: "#fff" }}>Registrar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <Link
        to={{ screen: "Login" }}
        style={{ ...styles.label, textAlign: "center", fontSize: 16 }}
      >
        Já está cadastrado? Login
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
    marginBottom: 40,
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
    marginRight: -10,
    marginTop: 30,
    marginBottom: 25,
    borderRadius: 10,
  },
});
