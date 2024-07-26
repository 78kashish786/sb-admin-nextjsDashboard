import React from 'react'

const page = () => {
  return (
    <div className=' bg-blue-500 w-[100%] h-[92vh] mx-auto flex flex-col justify-center items-center'>
      <div className='flex flex-col   w-[45%] bg-white rounded-xl shadow-md space-y-5'>
        <div className=' py-6 border-b text-center bg-gray-100 rounded-xl'>
            <h1 className='text-3xl font-semibold '>Create Account</h1>
        </div>
        <div className='flex flex-col space-y-3 py-4 px-4 '>
            <div className='flex justify-between items-center gap-3'>
            <input placeholder='First Name' className='px-4 py-5 border  w-[100%] rounded-md border border-gray-500'/>
            <input placeholder='Last Name' className='px-4 py-5 border  w-[100%] rounded-md border border-gray-500'/>
              
            </div>
            <input placeholder='Email Address' className='px-4 py-5 border  w-[100%] rounded-md border border-gray-500'/>
            <div className='flex justify-between items-center gap-3'>
            <input placeholder='Password' className='px-4 py-5 border  w-[100%] rounded-md border border-gray-500'/>
            <input placeholder='Confirm Password' className='px-4 py-5 border  w-[100%] rounded-md border border-gray-500'/>
              
            </div>
            <button className='bg-blue-500 text-md font-light py-2 text-center rounded-md text-white'>Create Account</button>

        </div>
        <div className='text-center text-blue-400 font-light underline py-4 border-t bg-gray-100'>
            <h1>Need an Account?</h1>
        </div>
      </div>
    </div>
  )
}

export default page
