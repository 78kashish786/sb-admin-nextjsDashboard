"use client"
import BarChart from '@/app/_components/BarChart'
import ChartDialogBox from '@/app/_components/ChartDialogBox'
import Footer from '@/app/_components/Footer'
import LineChart from '@/app/_components/LineChart'
import Main from '@/app/_components/Main'
import NavComp from '@/app/_components/NavComp'
import NoticeComponent from '@/app/_components/NoticeComponent'
import { usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
  const location = usePathname();
  return (
    <Main>
      <div className='px-4 py-10'>
        <h1 className='text-4xl font-semibold'>Charts</h1>
        <NavComp location={location} />
        <NoticeComponent
          notice={
            'Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official Chart.js documentation .'
          }
        />
        <ChartDialogBox chartName={"Line Chart"}>
          <LineChart/>
        </ChartDialogBox>
        <div className="grid grid-cols-2 gap-20 justify-between items-center py-8 ">
            <ChartDialogBox  chartName={'Bar Chart'}>
              <LineChart/>
            </ChartDialogBox>
            <ChartDialogBox  chartName={'Bar Chart'}>
              <BarChart/>
            </ChartDialogBox>
        </div>
      </div>
      <Footer/>
    </Main>
  )
}

export default page
