'use client'

import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

const LayComp = ({ children }) => {
  const [onhide, setOnHide] = useState(false)
  const [staticNav, setStaticNav] = useState(false)
  const handleOnHide = () => {
    setOnHide(!onhide)
  }
  const handleStaticNav = () => {
    setStaticNav(!staticNav);
     console.log('nav', staticNav)
  }
  return (
    <div>
      <Header handleOnHide={handleOnHide} staticNav={staticNav} />
      <div className='grid grid-cols-6 relative'>
        <aside
          className={
            onhide ? 'hidden' : 'self-start sticky top-0 bottom-0 col-span-1'
          }
        >
          <Sidebar handleStaticNav={handleStaticNav} />
        </aside>
        <div className={onhide ? 'col-span-6' : 'col-span-5'}>
          <Main>{children}</Main>
        </div>
      </div>
    </div>
  )
}

export default LayComp
