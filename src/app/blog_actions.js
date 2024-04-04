'use server';
import { cookies } from "next/headers";
export async function FetchBlogs(search, category, sort) {
    try {
        const access_token = cookies().get('_access')?.value
        const res = await fetch(`${process.env.API_URL}/api/v1/blogs/?sort=${sort?sort:""}&category=${category?category:""}&search=${search?search:""}`, {
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

        // console.log("blog response -> ", data)
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

        // console.log("blog response -> ", data)
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

		// console.log("Blog resposne:", data)
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

		// console.log("Blog resposne:", data)
		return { "success": true, data }
	}
	catch(error){
        console.log(error)
		return { "success": false, "message": "Fail API" }
	}
}

export async function DeleteBlog(id) {
	try {
        const access_token = cookies().get('_access')?.value
		const res = await fetch(`${process.env.API_URL}/api/v1/blogs/${id}/`, {
			method: 'DELETE',
			headers: {
				"Authorization": `Bearer ${access_token}`
			},
			cache: 'no-store',
		})
        console.log("blog res",res)
		if (res.status != 204) {
			return { "success": false, "message": "Fail to Delete Blog"};
		}

		// console.log("Blog resposne:", data)
		return { "success": true}
	}
	catch(error){
        console.log("We go inside Error")
		return { "success": false, "message": "Fail API" }
	}
}

export async function FetchBlogComment(id) {
	try {
        const access_token = cookies().get('_access')?.value
		const res = await fetch(`${process.env.API_URL}/api/v1/comments/?content_type=11&object_id=${id}`, {
			method: 'GET',
			headers: {
				"Authorization": `Bearer ${access_token}`
			},
			cache: 'no-store',
		})
        console.log("comment res",res)
		const data = await res.json();
		if (!res.ok) {
			return { "success": false, "message": "Fail to Fetch Comment"};
		}

		// console.log("Blog resposne:", data)
		return { "success": true, data}
	}
	catch(error){
        console.log("We go inside Error")
		return { "success": false, "message": "Fail API" }
	}
}

export async function SubmitBlogComment(id,text) {
	try {
        const access_token = cookies().get('_access')?.value
		const res = await fetch(`${process.env.API_URL}/api/v1/comments/`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${access_token}`
			},
			cache: 'no-store',
			body: JSON.stringify({
				text: text,
				content_type: 11,
				object_id: id
			}),
		})
        console.log("comment submit res",res)
		const data = await res.json();
		if (!res.ok) {
			return { "success": false, "message": "Fail to Submit Comment"};
		}

		// console.log("Blog resposne:", data)
		return { "success": true, data}
	}
	catch(error){
        console.log("We go inside Error")
		return { "success": false, "message": "Fail API" }
	}
}