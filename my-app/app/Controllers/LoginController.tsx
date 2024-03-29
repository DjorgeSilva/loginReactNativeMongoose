import { ApiResponseType, LoginType } from "../types";

export default async function LoginController(
  data: LoginType
): Promise<ApiResponseType> {
  try {
    const response = await fetch("http://192.168.3.26:8080/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
    return response;
  } catch (error) {
    console.error(error);
  }
}
