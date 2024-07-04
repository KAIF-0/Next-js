// import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // return NextResponse.json({data: "This is through middleware"})       
  // return NextResponse.rewrite(new URL('/contact', request.url))                //REWRITE: url /about hi rahega par data /contact ka dikhaega
  // return NextResponse.redirect(new URL('/contact', request.url))              //REDIRECT: url bhi /contact ho jaega aur data bhi 


  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.rewrite(new URL('/contact', request.url))
  // }
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }