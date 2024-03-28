'use server';
import { cookies } from "next/headers";
export async function ChangeProfileImage(formData) {
	try {
        const access_token = cookies().get('_access')?.value
		const res = await fetch(`${process.env.API_URL}/api/v1/auth/profile/image`, {
			method: 'PUT',
			headers: {
				"Authorization": `Bearer ${access_token}`
			},
			cache: 'no-store',
			body: formData,
		})
        console.log("image res",res)
		const data = await res.json();
		if (!res.ok) {
			console.log("Error:", data);
			return { "success": false, "message": "Fail to Change Image"};
		}

		console.log("imagechange resposne:", data)
		return { "success": true, data }
	}
	catch(error){
        console.log(error)
		return { "success": false, "message": "Fail API" }
	}
}