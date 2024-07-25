"use client"
import React from 'react'
import { TiChartLine } from "react-icons/ti";
const ChartDialogBox = ({children, chartName}) => {
  return (
    <div className='border rounded-xl'>
        <div className='p-2 bg-gray-200 flex gap-2'>
            <TiChartLine size={15}/>
            <h1>{chartName}</h1>
        </div>
      <div className='p-2'>
        {children}
      </div>
    </div>
  )
}

export default ChartDialogBox
