"use client"

import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

const LayComp = ({children}) => {

    const [onhide,setOnHide]= useState(false);
    const handleOnHide = ()=>{
        setOnHide(!onhide);
        console.log("Vale", onhide);
    }
  return (
    <div>
          <Header handleOnHide ={handleOnHide}  />
          <div className='grid grid-cols-6 relative'>
            <aside className={onhide ?"hidden":'self-start sticky top-0 bottom-0 col-span-1'}>
              <Sidebar />
            </aside>
            <div className={onhide ? "col-span-6":"col-span-5"}>
              <Main>{children}</Main>
            </div>
          </div>
    </div>
  )
}

export default LayComp
