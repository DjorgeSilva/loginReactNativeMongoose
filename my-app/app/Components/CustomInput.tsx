import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  const isPasswordField = name === "password" || name === "confirmPassword";
  return (
    <>
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
      <TextInput
        secureTextEntry={isPasswordField}
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
    </>
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: "100%",
    margin: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingLeft: 10,
  },
  errorText: {
    fontSize: 10,
    color: "red",
    marginLeft: 12,
  },
  errorInput: {
    borderColor: "red",
  },
});

export default CustomInput;
