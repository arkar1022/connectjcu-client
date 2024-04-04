'use server';
import { cookies } from "next/headers";
export async function FetchResources(search, category, sort) {
    try {
        const access_token = cookies().get('_access')?.value
        const res = await fetch(`${process.env.API_URL}/api/v1/resources/?sort=${sort?sort:""}&category=${category?category:""}&search=${search?search:""}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${access_token}`
            },
            cache: 'no-store',
        })
        const data = await res.json();
        if (!res.ok) {
            console.log("Error:", data);
            return { "success": false, "message": "Fail to Get Resoures"};
        }

        console.log("resource response -> ", data)
        return { "success": true, data }
    }
    catch(error){
        console.log(error)
        return { "success": false, "message": "Fail API" }
    }
} 

export async function FetchDetailResource(resource_id) {
    try {
        const access_token = cookies().get('_access')?.value
        const res = await fetch(`${process.env.API_URL}/api/v1/resources/${resource_id}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${access_token}`
            },
            cache: 'no-store',
        })
        const data = await res.json();
        if (!res.ok) {
            console.log("Error:", data);
            return { "success": false, "message": "Fail to Get Resource"};
        }

        console.log("resource response -> ", data)
        return { "success": true, data }
    }
    catch(error){
        console.log(error)
        return { "success": false, "message": "Fail API" }
    }
} 

export async function SubmitResource(formData) {
	try {
        const access_token = cookies().get('_access')?.value
		const res = await fetch(`${process.env.API_URL}/api/v1/resources/`, {
			method: 'POST',
			headers: {
				"Authorization": `Bearer ${access_token}`
			},
			cache: 'no-store',
			body: formData,
		})
        console.log("blog res",res)
		const data = await res.json();
		if (!res.ok) {
			console.log("Error:", data);
			return { "success": false, "message": "Fail to Submit Resource"};
		}

		console.log("Resource resposne:", data)
		return { "success": true, data }
	}
	catch(error){
        console.log(error)
		return { "success": false, "message": "Fail API" }
	}
}

export async function UpdateResource(id,formData) {
	try {
        const access_token = cookies().get('_access')?.value
		const res = await fetch(`${process.env.API_URL}/api/v1/resources/${id}/`, {
			method: 'PUT',
			headers: {
				"Authorization": `Bearer ${access_token}`
			},
			cache: 'no-store',
			body: formData,
		})
        console.log("blog res",res)
		const data = await res.json();
		if (!res.ok) {
			console.log("Error:", data);
			return { "success": false, "message": "Fail to Submit Resource"};
		}

		console.log("Resource resposne:", data)
		return { "success": true, data }
	}
	catch(error){
        console.log(error)
		return { "success": false, "message": "Fail API" }
	}
}