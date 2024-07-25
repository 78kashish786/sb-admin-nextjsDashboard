"use client"
import ChartDialogBox from '@/app/_components/ChartDialogBox'
import Footer from '@/app/_components/Footer'
import LineChart from '@/app/_components/LineChart'
import Main from '@/app/_components/Main'
import NavComp from '@/app/_components/NavComp'
import NoticeComponent from '@/app/_components/NoticeComponent'
import TableDisplay from '@/app/_components/TableDisplay'
import BarChart from 'chartjs'
import { usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
  const location = usePathname();
  return (
    <Main >
        <div className='px-4 py-10'>
        <h1 className='text-4xl font-semibold'>Tables</h1>
        <NavComp location={location} />
        <NoticeComponent notice={"DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the official DataTables documentation ."}/>
        <TableDisplay/>
        </div>
        <Footer/>
    </Main>
  )
}

export default page
