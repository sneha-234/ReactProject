import COOKIES from "@/utils/cookieConstant";
import axios from "axios";
import Cookies from "js-cookie";

export const loginService = async ({ email, password }) => {
  try {
    const res = await axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    });
    Cookies.set( COOKIES , res.data.token, {
      expires: new Date(new Date().getTime() + 10 * 60 * 1000),
    });

    return { success: true, message: "Successful login" };
  } catch (error) {
    if (error?.response?.status == 400) {
      return { success: false, message: "Invalid login credentials" };
    }
    return { success: false, message: error.message };
  }
};

export const SignUpService = async ({email , password , confirmPassword, termsAndCondition}) =>
{
  try {
    const res = await axios.post("https://reqres.in/api/register", {
      email: email,
      password: password,
      confirmPassword : confirmPassword,
      termsAndCondition: termsAndCondition
    });

    Cookies.set( COOKIES , res.data.token, {
      expires: new Date(new Date().getTime() + 10 * 60 * 1000),
    });


    return { success: true, message: "Successful signup" };
  } catch (error) {
    if (error?.response?.status == 400) {
      return { success: false, message: "Invalid login credentials" };
    }
    return { success: false, message: error.message };
  }
}