import { RegisterType } from "../types";

export default async function registerUserPost(
  data: RegisterType
): Promise<void> {
  try {
    const response = await fetch("http://192.168.3.26:8080/auth/register", {
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
    // move to login screen
  } catch (error) {
    console.error(error);
  }
}
