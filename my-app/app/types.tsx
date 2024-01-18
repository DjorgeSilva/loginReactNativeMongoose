export type RegisterType = {
  name: String;
  email: String;
  password: String;
  confirmPassword: String;
};

export type ApiResponseType = {
  code: Number;
  msg?: String;
  data?: {
    name: String;
    email: String;
  };
};

export type LoginType = {
  email: String;
  password: String;
};
