'use server'
import { cookies } from 'next/headers'
export async function LogoutAccount() {
	try {
		console.log("hello")
		const refresh_token = cookies().get('_refresh')?.value
		const access_token = cookies().get('_access')?.value
		const res = await fetch(`${process.env.API_URL}/api/v1/auth/logout/`, {
		  method: 'POST',
		  headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${access_token}`
		  },
		  body: JSON.stringify({
			refresh_token: refresh_token,
		  }),
		})
		const data = await res.json();
		if (!res.ok){
		  return false
		}
		cookies().delete('_access')
		cookies().delete('_refresh')
		return true
	  }
	  catch {
		return false
	  }
	
	}