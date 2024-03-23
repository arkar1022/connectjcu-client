import SignUp from "./SignUp";
import { RegisterAccount } from "../auth_actions";
export default async function SignUpMain() {
    return (
        <SignUp RegisterAccount={RegisterAccount} />
    );
  }
  