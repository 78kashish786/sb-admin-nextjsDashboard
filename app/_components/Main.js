import React from 'react'

const Main = ({children}) => {
  return (
    <div className='overflow-y-scroll'>
      {children}
    </div>
  )
}

export default Main
