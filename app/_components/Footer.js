import React from 'react'
import Main from './Main'

const Footer = () => {
  return (
    <Main>
        <div className='flex justify-between items-center bg-gray-100 py-5 px-4 text-sm'>
        <h1>Copyright @Webiste 2023</h1>
        <div>
            <ul className='flex text-blue-400 gap-1'>
                <li>Privacy Policy</li>
                <li>Terms and conditions</li>
            </ul>
        </div>
            </div>
    </Main>
  )
}

export default Footer
