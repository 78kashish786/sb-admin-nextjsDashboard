'use client'
import React, { useState } from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

const Header = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const SubMenu = [
    { name: 'Setting' },
    { name: 'Activity Log' },
    { name: 'Log Out' }
  ]

  return (
    <div className=' sticky top-0  px-6  bg-gray-800 text-white flex justify-between items-center z-50 '>
      <div className='flex gap-[100px] text-xl items-center'>
        <h1>Start BootStrap</h1>
        <MdOutlineMenu size={25} />
      </div>
      <div className='flex items-center mr-4'>
        <div className='flex gap-0 items-center p-1 gap-10'>
          <div className='flex items-center py-2 rounded-xl  md '>
            <input className='py-2 px-2' placeholder='Search for...' />
            <div className='bg-blue-400 p-1  p-3'>
              <FaSearch className='' />
            </div>
          </div>
          <div className='relative'>
            <div
              onClick={() => setOpenSubMenu(!openSubMenu)}
              className='text-2xl flex gap-1 items-center '
            >
              <FaUserAlt />
              <FaChevronDown size={10} />
            </div>
            <div
              className={
                openSubMenu
                  ? 'absolute right-10 text-black  bg-white p-2  w-[180px] border rounded-xl shadow-sm'
                  : 'hidden'
              }
            >
              <ul>
                {SubMenu.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className=' hover:text-gray-900 hover:bg-gray-200  rounded-md py-2 px-1'
                    >
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
