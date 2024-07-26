
import Image from "next/image";
import { Children } from "react";
import Main from "../_components/Main";
import NoticeComponent from "../_components/NoticeComponent";
import TableDisplay from "../_components/TableDisplay";
import Footer from "../_components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import ChartDialogBox from "../_components/ChartDialogBox";
import BarChart from "../_components/BarChart";
import LineChart from "../_components/LineChart";
import NavComp from "../_components/NavComp";


export default function Home({ children }) {

  const DBCards = [
    { name: "Primary Card", color: "bg-blue-500" },
    { name: "Warning Card", color: "bg-yellow-500" },
    { name: "Success Card", color: "bg-green-500" },
    { name: "Danger Card", color: "bg-red-500" },
  ]

  return (
    <Main>
      {children}

      <div className='px-4 py-10'>
        <h1 className='text-4xl font-semibold'>Dashboard</h1>
        <NavComp />
        <div className="flex gap-6 justify-between items-center my-10 ">
          {
            DBCards?.map((item, index) => {
              return (
                <>
                  <div key={index} className={`border border w-[100%]  ${item.color} text-white rounded-xl`}>
                    <div className="py-5 px-4 text-xl font-light">
                      <h1>{item.name}</h1>
                    </div>
                    <div className="flex py-2 px-4  items-center justify-between border-t border-gray-50 text-sm">
                      <h1>View details</h1>
                      <IoIosArrowForward size={15} />
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className="grid grid-cols-2 gap-20 justify-between items-center py-8 ">
          <ChartDialogBox chartName={'Bar Chart'}>
            <LineChart />
          </ChartDialogBox>
          <ChartDialogBox chartName={'Bar Chart'}>
            <BarChart />
          </ChartDialogBox>
        </div>
        <TableDisplay />
      </div>
      <Footer />
    </Main>
  );
}
