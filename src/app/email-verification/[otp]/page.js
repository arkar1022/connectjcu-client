'use server'
import Verified from "./verified";
export const VerifyEmail = async (otp) => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/v1/auth/verify-email/`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          cache:'no-store',
          body: JSON.stringify({
            otp: otp
          }),
        })
        if (!res.ok){
          return false
        }
        const data = await res.json();
        console.log("verify resposne:",data)
        return true
      }
      catch {
        return false
      }
}
export default async function VerifyMain({params}) {
    const {otp} = params;
    // const isVerified = await verifyEmail(otp)
    return (
      <Verified VerifyEmail={VerifyEmail} otp={otp}/>
    );
  }