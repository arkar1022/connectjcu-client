import Login from "./Login";
import { LoginAccount } from "../auth_actions";
import { headers } from "next/headers";

export default async function LoginMain() {

  return (
    <Login LoginAccount={LoginAccount}/>
  );
}
