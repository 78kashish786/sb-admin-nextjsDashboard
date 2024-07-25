import React from 'react'

const NoticeComponent = ({notice}) => {
  return (
    <div className='p-5 bg-white text-md font-light border border-gray-300 rounded-xl my-4'>
      <p>{notice}</p>
    </div>
  )
}

export default NoticeComponent
