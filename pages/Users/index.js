import React, { useEffect } from "react";
import LayoutPage from "@/components/Layout";
import UsersPage from "@/components/UsersPage";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import useAuth from "@/hook/useAuth";

function Users() {

    return <UsersPage />;
}
  
Users.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Users;