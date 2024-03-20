"use server";
import Login from "./Login";
import { cookies } from 'next/headers'

export async function LoginAccount(email,password) {
  try {
    const oneDay = 24 * 60 * 60 * 1000 * 1
    const fiveHour = 5 * 60 * 60 * 100
    const res = await fetch(`${process.env.API_URL}/api/v1/auth/login/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
    if (!res.ok){
      return false
    }
    const data = await res.json();
    cookies().set({
      name: '_access',
      value: data.access_token,
      expires: Date.now() + fiveHour,
      httpOnly: true,
      path: '/',
    })
    cookies().set({
      name: '_refresh',
      value: data.refresh_token,
      expires: Date.now() + oneDay,
      httpOnly: true,
      path: '/',
    })
    return true
    
  }
  catch {
    return false
  }

}

export default async function LoginMain() {
  return (
    <Login LoginAccount={LoginAccount} />
  );
}
