// import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server"
import { cookies, headers } from "next/headers";

export async function POST(request) {
  let data = await request.json()
  console.log(data)

  // //FIXED RESPONSE {JSON}
  // return NextResponse.json({succes:true, data},{status:201})

  // CUSTOMISED RESPONSE 
  return new Response(JSON.stringify(data), {
    status: 201,
    headers: {
      "Set-Cookie": `token=${data.name}`,
      Authorization: `Bearer ${data.name}`,
    },
  });


}