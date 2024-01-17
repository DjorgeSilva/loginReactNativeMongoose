import * as yup from "yup";

// Login schema
export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um endereço de email válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Senha deve conter uma letra minúscula")
    .matches(/\w*[A-Z]\w*/, "Senha deve conter uma letra maiúscula")
    .matches(/\d/, "Senha deve conter um número")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Senha deve conter um caractere especial"
    )
    .min(8, ({ min }) => `Senha deve conter no minímo ${min} caracteres`)
    .required("Senha é obrigatório"),
});
