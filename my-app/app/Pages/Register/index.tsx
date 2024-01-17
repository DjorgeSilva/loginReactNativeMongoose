import { Field, Formik } from "formik";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomInput from "../../Components/CustomInput";
import registerUserPost from "../../Controllers/RegisterController";
import { EMPTY_STRING } from "../../constants";
import { registerValidationSchema } from "../../utils/yupSchema";

export default function Register() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Login</Text>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          name: EMPTY_STRING,
          email: EMPTY_STRING,
          password: EMPTY_STRING,
          confirmPassword: EMPTY_STRING,
        }}
        onSubmit={(values) => registerUserPost(values)}
        style={styles.container}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <Text style={styles.inputLabel}>Name:</Text>
            <Field component={CustomInput} name="name" />
            <Text style={styles.inputLabel}>Email:</Text>
            <Field component={CustomInput} name="email" />
            <Text style={styles.inputLabel}>Senha:</Text>
            <Field component={CustomInput} name="password" />
            <Text style={styles.inputLabel}>Confirmar senha:</Text>
            <Field component={CustomInput} name="confirmPassword" />
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
              disabled={!isValid}
            >
              <Text style={{ ...styles.inputLabel, color: "#fff" }}>
                Registrar
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
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
