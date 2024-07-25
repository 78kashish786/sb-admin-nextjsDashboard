import Link from 'next/link'
import React from 'react'

const NavComp = ({location}) => {
  return (
    <div className='my-2'>
        <Link href='/' className='text-blue-500 underline'>Dashboard</Link> / <span>{location}</span>
    </div>
  )
}

export default NavComp
