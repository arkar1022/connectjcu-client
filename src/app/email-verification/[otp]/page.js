import Verified from "./verified";
import { VerifyEmail } from "@/app/auth_actions";
export default async function VerifyMain({params}) {
    const {otp} = params;
    // const isVerified = await verifyEmail(otp)
    return (
      <Verified VerifyEmail={VerifyEmail} otp={otp}/>
    );
  }