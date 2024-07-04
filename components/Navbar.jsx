import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <Link scroll={false} href="/about">ABOUT</Link>
      <Link href="/contact">CONTACT</Link>
    </div>
  )
}

export default Navbar
