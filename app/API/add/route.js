// import { cookies, headers } from "next/headers";
import { cookies } from "next/headers";
import { NextResponse } from "next/server"


export async function POST(request) {
  let data = await request.json()
  console.log(data)
  const cookieStore = cookies();

  // //FIXED RESPONSE {JSON}
  // return NextResponse.json({succes:true, data},{status:201})
  cookieStore.delete('token')

  // CUSTOMISED RESPONSE 
  return new Response(JSON.stringify(data), {
    status: 201,
    headers: {
      "Set-Cookie": `token=${data.name}`,
      Authorization: `Bearer ${data.name}`,
    },
  });


}