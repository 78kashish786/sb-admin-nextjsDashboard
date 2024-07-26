"use client"
import React from 'react'
import Main from './Main'

const Footer = () => {
  const handleScroll = ()=>{
    window.scrollTo(0,0);
  }
  return (
    <Main>
        <div className='flex justify-between items-center bg-gray-100 py-5 px-4 text-sm'>
        <h1>Copyright @Webiste 2023</h1>
        <div>
            <ul className='flex text-blue-400 gap-1 '>
                <li className='underline mx-1 cursor-pointer' onClick={handleScroll}>Privacy Policy</li>
                <li className='underline mx-1 cursor-pointer' onClick={handleScroll}>Terms and conditions</li>
            </ul>
        </div>
            </div>
    </Main>
  )
}

export default Footer
