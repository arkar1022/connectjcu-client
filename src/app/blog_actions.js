'use server';
import { cookies } from "next/headers";
export async function FetchBlogs() {
    try {
        const access_token = cookies().get('_access')?.value
        const res = await fetch(`${process.env.API_URL}/api/v1/blogs`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${access_token}`
            },
            cache: 'no-store',
        })
        const data = await res.json();
        if (!res.ok) {
            console.log("Error:", data);
            return { "success": false, "message": "Fail to Get Blogs"};
        }

        console.log("blog response -> ", data)
        return { "success": true, data }
    }
    catch(error){
        console.log(error)
        return { "success": false, "message": "Fail API" }
    }
} 

export async function FetchDetailBlog(blog_id) {
    try {
        const access_token = cookies().get('_access')?.value
        const res = await fetch(`${process.env.API_URL}/api/v1/blogs/${blog_id}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${access_token}`
            },
            cache: 'no-store',
        })
        const data = await res.json();
        if (!res.ok) {
            console.log("Error:", data);
            return { "success": false, "message": "Fail to Get Blogs"};
        }

        console.log("blog response -> ", data)
        return { "success": true, data }
    }
    catch(error){
        console.log(error)
        return { "success": false, "message": "Fail API" }
    }
} 

export async function SubmitBlog(formData) {
	try {
        const access_token = cookies().get('_access')?.value
		const res = await fetch(`${process.env.API_URL}/api/v1/blogs/`, {
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
			return { "success": false, "message": "Fail to Submit Blog"};
		}

		console.log("Blog resposne:", data)
		return { "success": true, data }
	}
	catch(error){
        console.log(error)
		return { "success": false, "message": "Fail API" }
	}
}

export async function UpdateBlog(id,formData) {
	try {
        const access_token = cookies().get('_access')?.value
		const res = await fetch(`${process.env.API_URL}/api/v1/blogs/${id}/`, {
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
			return { "success": false, "message": "Fail to Submit Blog"};
		}

		console.log("Blog resposne:", data)
		return { "success": true, data }
	}
	catch(error){
        console.log(error)
		return { "success": false, "message": "Fail API" }
	}
}