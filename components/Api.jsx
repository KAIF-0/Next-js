"use client"
import React from 'react'

const Api = () => {

  const handleClick = async () => {
    // let data = {
    //   name: "harry",
    //   role: "coder"
    // }
    let a = await fetch("/API/hono/slug", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
      // body: JSON.stringify(data),
    })

    let res = await a.json()
    console.log(res)
  }


  return (
    <div>
      <h1>Next.js API routes demo.</h1>
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  )
}

export default Api