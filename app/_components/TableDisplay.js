import React from 'react'
import { FaTable } from "react-icons/fa";
const TableDisplay = () => {

  const tableData = [
    {name:"Kashish", Position:"Software Engineer", Office:"Edingburg", age:"24", salary:"$1212022"},
    {name:"Kashish", Position:"Software Engineer", Office:"Edingburg", age:"24", salary:"$1212022"},
    {name:"Kashish", Position:"Software Engineer", Office:"Edingburg", age:"24", salary:"$1212022"},
    {name:"Kashish", Position:"Software Engineer", Office:"Edingburg", age:"24", salary:"$1212022"},
    {name:"Kashish", Position:"Software Engineer", Office:"Edingburg", age:"24", salary:"$1212022"},
    {name:"Kashish", Position:"Software Engineer", Office:"Edingburg", age:"24", salary:"$1212022"},
    {name:"Kashish", Position:"Software Engineer", Office:"Edingburg", age:"24", salary:"$1212022"},
    {name:"Kashish", Position:"Software Engineer", Office:"Edingburg", age:"24", salary:"$1212022"},
    {name:"Kashish", Position:"Software Engineer", Office:"Edingburg", age:"24", salary:"$1212022"},
    {name:"Kashish", Position:"Software Engineer", Office:"Edingburg", age:"24", salary:"$1212022"},

  ]

  return (
    <div className='w-[100%] border border-gray-300 rounded-xl shadow-sm'>
      <div className='flex gap-3 px-3 py-2 bg-gray-200 items-center'>
        <FaTable/><h1>Data Table Example</h1>
      </div>
      <div className='p-3 flex justify-between items-center'>
        <div className='flex items-center gap-5'>
          <select className='p-3 border'>
            <option className='p-2'>10</option>
            <option className='p-2'>10</option>
            <option className='p-2'>10</option>

          </select>
          <h1>Entries per page</h1>
        </div>
        <input placeholder='search' className='px-4 py-2 rounded-md border'/>
      </div>
      {/* Table Display Comp */}
      <div className='p-4'>
      <table className='px-3 py-2 w-[100%]'>
        <tbody>
          <tr className='grid grid-cols-5 text-left border  p-2 '>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>salary</th>
        </tr>

        {
          tableData?.map((item,index)=>(
            <tr key={index}  className='w-[100%] grid grid-cols-5 justfy-between items-center hover:bg-gray-200 border'>
              <td className='p-2 hover:bg-gray-200 border-r '>{item.name}</td>
              <td  className='p-2 hover:bg-gray-200 border-r '>{item.Position}</td>
              <td  className='p-2 hover:bg-gray-200 border-r '>{item.Office}</td>
              <td  className='p-2 hover:bg-gray-200 border-r '>{item.age}</td>
              <td  className='p-2 hover:bg-gray-200 border-r '>{item.salary}</td>
            </tr>
          ))
        }
        </tbody>
        
        
        </table>
        <h1 className='py-2 text-md '>Showing some Values</h1>
      </div>
      
    </div>
  )
}

export default TableDisplay
