import * as yup from "yup";

// Register schema
export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/(\w.+\s).+/, "Digite no mínimo dois nomes")
    .required("Nome é obrigatório"),
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas devem ser iguais")
    .required("Confirmar senha é obrigatório"),
});
