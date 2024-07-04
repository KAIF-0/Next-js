"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Userouter = () => {

    const router = useRouter()

    return (
        <>
            {/* <button type="button" onClick={() => router.push('/about'), { scroll: false }}>                  //add a new entry to a stack history
                Dashboard
            </button> */}
            {/* <button type="button" onClick={() => router.replace('/about')}>                                     //replace the entry in a stack history
                Dashboard
            </button> */}
        </>
    )
}

export default Userouter