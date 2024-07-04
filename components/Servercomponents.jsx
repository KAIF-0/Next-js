"use client"  //Defaultly every things run as server components(RUN AT BACKENED) in NEXT so thats why we use this to run it as client component
import React, { useState } from 'react'
// import  from 'react'

const Servercomponents = () => {
    const [count, setcount] = useState(0)

    return (
        <>
            I am {count}
            <button onClick={() => setcount(count + 1)}>hello</button>
        </>
    );
}

export default Servercomponents