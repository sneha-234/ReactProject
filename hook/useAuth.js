import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import COOKIES from "@/utils/cookieConstant";

function useAuth() {
  const router = useRouter();

  // const canSkip = ["/home", "/"].includes(router.pathname);

  // console.log(
  //   "===user auth canSkip, router.pathname==",
  //   canSkip,
  //   router.pathname
  // );

  const [validated, setValidated] = useState(null);


  useEffect(() => {
    // if (!validated) {
    const isAuth = !!Cookies.get (COOKIES);

    setValidated(isAuth);

    if (!isAuth) {
      router.replace("/login");
    }
    // }
  }, [validated]);

  return { validated };
}

export default useAuth;