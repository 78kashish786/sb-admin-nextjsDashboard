import React from 'react'

const Main = ({children}) => {
  return (
    <div className='overflow-y-scroll no-scrollbar'>
      {children}
    </div>
  )
}

export default Main
