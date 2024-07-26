

import ErrorPage from '@/app/_components/ErrorPage'
import React from 'react'

const page = () => {
  return (
    <div>
      <ErrorPage code={404} subhead={"Not Fioun"} head={"Hello Dear"} />
    </div>
  )
}

export default page
