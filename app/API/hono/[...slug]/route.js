import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { getCookie, setCookie, deleteCookie } from 'hono/cookie'

export const runtime = 'edge'

const app = new Hono().basePath('/API/hono')

app.on('GET', ['/', '/:slug'], async (c) => {

  // const body = await c.req.json()

  // const body = await c.req.text()

  // const { slug } = c.req.param();

  // const { query } = c.req.query();

  // const data = c.req.header('Content-Type')

  // const data = getCookie(c, 'token2')

  // console.log(data)




  // deleteCookie(c, 'token')

  // setCookie(c, 'token3', 'cookies', {
  //   path: '/',
  //   secure: true,
  //   domain: 'example.com',
  //   httpOnly: true,
  //   maxAge: 1000,
  //   expires: new Date(Date.UTC(2000, 11, 24, 10, 30, 59, 900)),
  //   sameSite: 'Strict'
  // })

  // return c.header('X-Message', 'Hello!')

  // return c.status(201)

  // return c.redirect('/', 301)

  // return c.notFound()

  // return c.html('<h1>Hello! Hono!</h1>')

  return c.body(JSON.stringify({ "json": "Thank you for coming" }), 201,
    {
      'X-Message': 'Hello!',
      'Content-Type': 'text/plain',
    })

  // return c.text('Hello, Hono!')

  // return c.json({
  //   message: 'Hello Next.js!',
  // })

})

app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})

export const GET = handle(app)