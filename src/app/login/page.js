import Login from "./Login";
import { LoginAccount } from "../auth_actions";
import { headers } from "next/headers";

export default async function LoginMain() {
  const headersList = headers()
  const referer = headersList.get('referer')
  const url = new URL(referer)
  return (
    <Login LoginAccount={LoginAccount} prev={url.pathname}/>
  );
}
