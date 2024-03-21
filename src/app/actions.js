'use server'
import { cookies } from 'next/headers'

export async function RegisterAccount(email, first_name, last_name, password) {
	try {
		const res = await fetch(`${process.env.API_URL}/api/v1/auth/register/`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			cache: 'no-store',
			body: JSON.stringify({
				email: email,
				first_name: first_name,
				last_name: last_name,
				password: password
			}),
		})
		const data = await res.json();
		console.log(data)
		if (res.status === 201) {
			console.log("Account created successfully");
			return { "success": true };
		} else if (!res.ok) {
			console.log("Error:", data);
			return { "success": false, "message": data?.detail || data?.email || (data.password ? "Password must be at least 6" :  "Unexpected Error Occur") };
		}

		console.log("register resposne:", data)
		return { "success": true }
	}
	catch {
		return { "success": false, "message": "Invalid Credential" }
	}
}


export async function LoginAccount(email, password) {
	try {
		const oneDay = 24 * 60 * 60 * 1000 * 1
		const fiveHour = 5 * 60 * 60 * 100
		const res = await fetch(`${process.env.API_URL}/api/v1/auth/login/`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			cache: 'no-store',
			body: JSON.stringify({
				email: email,
				password: password
			}),
		})
		const data = await res.json();
		console.log(data)
		if (!res.ok) {
			return { "success": false, "message": data?.detail || data?.email || "Invalid Username or Password" }
		}

		console.log("login resposne:", data)
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
		return { "success": true }
	}
	catch {
		return { "success": false, "message": "Invalid Credential" }
	}
}

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
		if (!res.ok) {
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