import React, { useState } from 'react'
import Layout from '../../components/shared/Layout'
import hand from "../../assets/image 1785.svg"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { IoMdSync } from 'react-icons/io'
import nig from "../../assets/nigeria 3.svg"
import disburse from "../../assets/Frame 1000005227.svg"
import inflow from "../../assets/Frame 1618868126.svg"

const Home = () => {

  const [show, setShow] = useState(false);

  return (
    <Layout title="Dashboard" >
<div className='flex gap-2'>
   <h4 className='text-[#000000] text-[24px] font-[400] '>Welcome back, <span className='text-[#164988] font-[700] '>Tlag Entertainment</span></h4>
   <img src={hand} alt="Logo" className="" />

</div>
<h4 className='text-[#000000] text-[16px] mt-2 font-[400] '>Here’s how your business is performing </h4>
       <div className='grid md:grid-cols-3 mt-6 md:mr-8'>
<div className='flex justify-between mb-2'>
<div className='flex items-center gap-2'>
<h4>My Balances</h4>

{!show ? (
                            <AiOutlineEyeInvisible className="" />
                          ) : (
                            <AiOutlineEye className="" />
                          )}
</div>
<div className='bg-[#164988]/[10%] rounded-full p-2'>
<IoMdSync className='text-[#164988]'/>
</div>
</div>
       </div>

       <div className='grid gap-3 md:grid-cols-3'>
<div className='bg-[#164988] shadow-md pl-5 pr-8 py-7  text-white rounded-[20px]'>
<div className='flex justify-between '>
<h4 className='text-[12px] font-[700]'>Available Balance</h4>
<img src={nig} alt="Logo" className="" />

</div>

<h3 className='text-[24px] font-[700] pb-5'>₦9,846.18</h3>
<div className='flex justify-around'>
<div className='flex gap-1 items-center'>
<h4 className='text-[10px] font-[400] '>Ledger:</h4>
<h4 className='text-[10px] font-[700] '>₦9,846.18</h4>
</div>

<div className='flex gap-1 items-center'>
<h4 className='text-[10px] font-[400] '>Locked:</h4>
<h4 className='text-[10px] font-[700] '>₦</h4>
</div>
</div>
</div>

<div className='bg-[#FFFFFF] shadow-md pl-5 pr-8 pt-7 pb-4 rounded-[20px]'>
<div className='flex justify-end'>
<img src={disburse} alt="Logo" className="" />
</div>

<h4 className='text-[12px] mt-1 font-[400] text-[#000000]'>Total Disbursement </h4>
<h4 className='text-[24px] font-[700] text-[#000000]'>₦ -50,000.00</h4>

<div className='mt-3 bg-[#FFEBEB] w-fit rounded-[2px] px-2 py-[0.5px] text-[#CC1E1E]'>
<h5 className='text-[8px] font-[400]'>-10.25%</h5>
</div>
</div>

<div className='bg-[#FFFFFF] shadow-md pl-5 pr-8 pt-7 pb-4 rounded-[20px]'>
<div className='flex justify-end'>
<img src={inflow} alt="Logo" className="" />
</div>

<h4 className='text-[12px] mt-1 font-[400] text-[#000000]'>Total Inflow </h4>
<h4 className='text-[24px] font-[700] text-[#000000]'>₦ 2,512,120.00</h4>

<div className='mt-3 bg-[#D5EED5] w-fit rounded-[2px] px-2 py-[0.5px] text-[#1A9417]'>
<h5 className='text-[8px] font-[400]'>-10.25%</h5>
</div>
</div>
        </div>

<div className='grid md:grid-cols-3 mt-4 md:mr-8'>
        <input type="email" 
                     name="email"
                      id="search-dropdown"
                       className="block p-2.5 w-full z-20 text-sm text-gray-900  rounded-lg  border " 
placeholder='search...'
                       />
            
        </div>

        <div className='flex mt-3 mb-1 justify-center text-[#151413] text-[20px] font-[700]'>
<h3>Total Active Employees: 53</h3>
        </div>


        <table className="w-full text-sm text-left text-gray-500 border-1 border-[#36A2EB] rounded-t-[10px]">
                                    <thead className="text-xs text-white rounded-t-[10px]  bg-[#164988] ">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                S/N
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                               Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Emmployee ID
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email address
                                            </th>
                                            <th scope="col" className="whitespace-nowrap px-6 py-3">
                                                Phone number
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Department
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Department status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      
                                    <tr className="bg-white border-b border-b-[#36A2EB]">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                1
                                            </th>
                                            <td className="px-6 whitespace-nowrap py-4">
                                                Michael Jordan
                                            </td>
                                            <td className="px-6 py-4">
                                            Uniswitch/05/02/1779
                                            </td>
                                            <td className="px-6 py-4">
                                            micheal@uniswitch.com
                                            </td>
                                            <td className="px-6 py-4">
                                            00000000000
                                            </td>
                                            <td className="px-6 py-4">
                                            Engineering
                                            </td>
                                            <td className="px-6 py-4">
                                          <div className='bg-[#1BBF5C33]/[20%] text-center rounded-md py-[0.5px] text-[#1BBF5C] px-2'>
                                            Successful
                                          </div>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b border-b-[#36A2EB]">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                               2
                                            </th>
                                            <td className="px-6 py-4">
                                                Michael Jordan
                                            </td>
                                            <td className="px-6 py-4">
                                            Uniswitch/05/02/1779
                                            </td>
                                            <td className="px-6 py-4">
                                            micheal@uniswitch.com
                                            </td>
                                            <td className="px-6 py-4">
                                            00000000000
                                            </td>
                                            <td className="px-6 py-4">
                                            Engineering
                                            </td>
                                            <td className="px-6 py-4">
                                          <div className='bg-[#1BBF5C33]/[20%] text-center rounded-md py-[0.5px] text-[#1BBF5C] px-2'>
                                            Successful
                                          </div>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b border-b-[#36A2EB]">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            3
                                            </th>
                                            <td className="px-6 py-4">
                                                Michael Jordan
                                            </td>
                                            <td className="px-6 py-4">
                                            Uniswitch/05/02/1779
                                            </td>
                                            <td className="px-6 py-4">
                                            micheal@uniswitch.com
                                            </td>
                                            <td className="px-6 py-4">
                                            00000000000
                                            </td>
                                            <td className="px-6 py-4">
                                            Engineering
                                            </td>
                                            <td className="px-6 py-4">
                                          <div className='bg-[#1BBF5C33]/[20%] text-center rounded-md py-[0.5px] text-[#1BBF5C] px-2'>
                                            Successful
                                          </div>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b border-b-[#36A2EB]">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                           4
                                            </th>
                                            <td className="px-6 py-4">
                                                Michael Jordan
                                            </td>
                                            <td className="px-6 py-4">
                                            Uniswitch/05/02/1779
                                            </td>
                                            <td className="px-6 py-4">
                                            micheal@uniswitch.com
                                            </td>
                                            <td className="px-6 py-4">
                                            00000000000
                                            </td>
                                            <td className="px-6 py-4">
                                            Engineering
                                            </td>
                                            <td className="px-6 py-4">
                                          <div className='bg-[#1BBF5C33]/[20%] text-center rounded-md py-[0.5px] text-[#1BBF5C] px-2'>
                                            Successful
                                          </div>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b border-b-[#36A2EB]">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            5
                                            </th>
                                            <td className="px-6 py-4">
                                                Michael Jordan
                                            </td>
                                            <td className="px-6 py-4">
                                            Uniswitch/05/02/1779
                                            </td>
                                            <td className="px-6 py-4">
                                            micheal@uniswitch.com
                                            </td>
                                            <td className="px-6 py-4">
                                            00000000000
                                            </td>
                                            <td className="px-6 py-4">
                                            Engineering
                                            </td>
                                            <td className="px-6 py-4">
                                          <div className='bg-[#1BBF5C33]/[20%] text-center rounded-md py-[0.5px] text-[#1BBF5C] px-2'>
                                            Successful
                                          </div>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b border-b-[#36A2EB]">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                             6
                                            </th>
                                            <td className="px-6 py-4">
                                                Michael Jordan
                                            </td>
                                            <td className="px-6 py-4">
                                            Uniswitch/05/02/1779
                                            </td>
                                            <td className="px-6 py-4">
                                            micheal@uniswitch.com
                                            </td>
                                            <td className="px-6 py-4">
                                            00000000000
                                            </td>
                                            <td className="px-6 py-4">
                                            Engineering
                                            </td>
                                            <td className="px-6 py-4">
                                          <div className='bg-[#1BBF5C33]/[20%] text-center rounded-md py-[0.5px] text-[#1BBF5C] px-2'>
                                            Successful
                                          </div>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b border-b-[#36A2EB]">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                           7
                                            </th>
                                            <td className="px-6 py-4">
                                                Michael Jordan
                                            </td>
                                            <td className="px-6 py-4">
                                            Uniswitch/05/02/1779
                                            </td>
                                            <td className="px-6 py-4">
                                            micheal@uniswitch.com
                                            </td>
                                            <td className="px-6 py-4">
                                            00000000000
                                            </td>
                                            <td className="px-6 py-4">
                                            Engineering
                                            </td>
                                            <td className="px-6 py-4">
                                          <div className='bg-[#1BBF5C33]/[20%] text-center rounded-md py-[0.5px] text-[#1BBF5C] px-2'>
                                            Successful
                                          </div>
                                            </td>
                                        </tr>
                              
                                    </tbody>
                                </table>
       
        </Layout>
  )
}

export default Home
