import { cookies, headers } from "next/headers";

export const addCookies = async () => {

    //Set Cookies
    //Method:1
    cookieStore.set('token2', 'my-secret-token', {
        httpOnly: true,
        maxAge: 60 * 60,
    });


    //Method:2  
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Set-Cookie": `token=${data.name}`,
            Authorization: `Bearer ${data.name}`,
        },
    });


    //Access Cookies
    // const cookieStore = cookies();
    // const { value } = cookieStore.get("token");

    //Access Headers
    // const header = headers();
    // const { value } = header.get("status");


    //Delete Cookies
    // const cookieStore = cookies();
    // cookieStore.delete('token')
}