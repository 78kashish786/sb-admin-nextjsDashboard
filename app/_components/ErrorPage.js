import Link from 'next/link'
import React from 'react'

const ErrorPage = ({code, head, subhead}) => {
  return (
    <div className='w-[100%] h-screen flex flex-col justify-center items-center space-y-2'>
      <h1 className='text-8xl font-light'>{code}</h1>
      <h1 className='text-md font-light text-gray-400'>{head}</h1>
      <h1 className='text-sm '>{subhead}</h1>
      <Link className='text-blue-300' href='/'>Return to Dashboard</Link>
    </div>
  )
}

export default ErrorPage
