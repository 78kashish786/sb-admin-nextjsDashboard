import ErrorPage from '@/app/_components/ErrorPage'
import Main from '@/app/_components/Main'
import React from 'react'

const page = () => {
  return (
    <Main>
        <ErrorPage code={404} head={"Page not Found"}  subhead={"Access to this resource is denied."}/>
    </Main>
  )
}

export default page
