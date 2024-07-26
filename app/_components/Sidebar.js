"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaEarthAfrica } from 'react-icons/fa6'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
const Sidebar = () => {
  const [openPages,setOpenPages]= useState(false);
  const [openAuth,setOpenAuth]= useState(false);
  const [openError,setOpenError]= useState(false);
  const [openLayout,setOpenLayout]= useState(false);
  const [lightMode, setLightMode]= useState(false);
  return (
    <div className={` overflow-y-scroll flex flex-col h-screen justify-between items-start ${lightMode ? "bg-white text-gray-800 ":"bg-gray-900 text-gray-200"}  `}>
      <div className='px-6 py-10 w-[100%]'>
        <ul className='text-gray-500 space-y-4 w-[100%]'>
          <li>
            <h1 className='uppercase font-bold'>Core</h1>
            <Link href='/' className='flex gap-2 items-center text-md py-3 px-1 text-[18px] hover:text-gray-300'>
              <FaEarthAfrica />
              <h3>Dashboard</h3>
            </Link>
          </li>
          <li className=' w-[100%]'>
            <h1 className='uppercase font-bold'>Interface</h1>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center text-md py-3 px-1 text-[18px]'>
                <FaEarthAfrica />
                <h3>Layout</h3>
              </div>
              {
                openAuth? <IoIosArrowDown  onClick={()=>setOpenLayout(!openLayout)} />:<IoIosArrowForward  onClick={()=>setOpenLayout(!openLayout)} />
              }
            </div>
            {
              !openLayout ? " ":(
                <ul>
                  <li>
                  <div className='flex gap-2 items-center text-md py-3 px-1 ml-5 text-[18px]'>
                <h3>Static Navigation</h3>
              </div>
                  </li>
                  <li onClick={()=>setLightMode(!lightMode)}>
                  <div className='flex gap-2 items-center text-md py-3 px-1 ml-5 text-[18px]'>
                <h3>Light SideNav</h3>
              </div>
                 </li>
                </ul>
              )
            }
            <div className='flex justify-between items-center ' onClick={()=>setOpenPages(!openPages)}>
              <div className='flex gap-2 items-center text-md py-3 px-1 text-[18px]'>
                <FaEarthAfrica />
                <h3>Pages</h3>
              </div>
              {
                openPages ? <IoIosArrowDown/>:<IoIosArrowForward />
              }
            </div>

            {
              !openPages ?"" :(
                <ul>
                  <li>
                  <div className='flex justify-between items-center'>
              <div  className='flex gap-2 items-center text-md py-3 px-1 ml-5 text-[18px]'>
                <h3>Authentication</h3>
              </div>
              {
                openAuth? <IoIosArrowDown  onClick={()=>setOpenAuth(!openAuth)} />:<IoIosArrowForward  onClick={()=>setOpenAuth(!openAuth)} />
              }
            </div>
            {
              !openAuth ? " ":(
                <ul className=''>
                  <li>
                  <div className='flex gap-2 items-center text-md py-3 px-1 ml-5 text-[18px]'>
                <h3>Login</h3>
              </div>
                  </li>
                  <li>
                  <div className='flex gap-2 items-center text-md py-3 px-1 ml-5 text-[18px]'>
                <h3>Register</h3>
              </div>
                  </li>
                  <li>
                  <div className='flex gap-2 items-center text-md py-3 px-1 ml-5 text-[18px]'>
                <h3>Forget Password</h3>
              </div>
                  </li>
                </ul>
              )
            }
            
                  </li>
                  <li>
                  <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center text-md py-3 px-1 ml-5 text-[18px]'>
                <h3>Error</h3>
              </div>
              {
                openError? <IoIosArrowDown  onClick={()=>setOpenError(!openError)} />:<IoIosArrowForward  onClick={()=>setOpenError(!openError)} />
              }
            </div>
            {openError ? (
              <ul>
              <li>
              <div className='flex gap-2 items-center text-md py-3 px-1 ml-5 text-[18px]'>
            <h3>404</h3>
          </div>
              </li>
              <li>
              <div className='flex gap-2 items-center text-md py-3 px-1 ml-5 text-[18px]'>
            <h3>500</h3>
          </div>
              </li>
              <li>
              <div className='flex gap-2 items-center text-md py-3 px-1 ml-5 text-[18px]'>
            <h3>401</h3>
          </div>
              </li>
            </ul>
            ):""}
                  </li>
                </ul>
              )
            }
            {/* <div className=''>

              </div> */}
          </li>
          <li>
            <h1 className='uppercase font-bold'>Add Onns</h1>
            <Link
              href='/charts'
              className='flex gap-2 items-center text-md py-3 px-1 text-[18px] hover:text-gray-300'
            >
              <FaEarthAfrica />
              <h3>Charts</h3>
            </Link>
            <Link
              href='/tables'
              className='flex gap-2 items-center text-md py-3 px-1 text-[18px] hover:text-gray-300'
            >
              <FaEarthAfrica />
              <h3>Tables</h3>
            </Link>
          </li>
        </ul>
      </div>
      <div className='bg-gray-500 bg-opacity-70 w-[100%] p-4 '>
        <h1 className='text-sm text-gray-400'>Logged in As:</h1>
        <h3 className='text-xl font-gray-300'>Start Bootstrap</h3>
      </div>
    </div>
  )
}

export default Sidebar
