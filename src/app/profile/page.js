import { cookies } from 'next/headers'
import Profile from './Profile';
async function GetProfile() {
	try {
        const access_token = cookies().get('_access')?.value
		const res = await fetch(`${process.env.API_URL}/api/v1/auth/profile/`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
                "Authorization": `Bearer ${access_token}`
			},
			cache: 'no-store',
		})
		const data = await res.json();
		console.log(data)
	    if (!res.ok) {
			console.log("Error:", data);
			return { "success": false, "message":  "Unexpected Error Occur" };
		}

		console.log("register resposne:", data)
		return { "success": true, data }
	}
	catch {
        console.log("error")
		return { "success": false, "message": "Invalid Credential" }
	}
}
export default async function MainProfile () {
    const res = await GetProfile()
    return( 
        <Profile res={res}/>
    )
}