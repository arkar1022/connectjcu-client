import SignUp from "./SignUp";
import { RegisterAccount } from "../actions";
export default async function SignUpMain() {
    return (
        <SignUp RegisterAccount={RegisterAccount} />
    );
  }
  