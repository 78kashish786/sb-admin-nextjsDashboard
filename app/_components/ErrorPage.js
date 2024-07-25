import Link from 'next/link'
import React from 'react'

const ErrorPage = ({code, head, subhead}) => {
  return (
    <div>
      <h1>{code}</h1>
      <h1>{head}</h1>
      <h1>{subhead}</h1>
      <Link href='/'>Return to Dashboard</Link>
    </div>
  )
}

export default ErrorPage
