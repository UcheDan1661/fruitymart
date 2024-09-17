import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    /*Header*/
    <div>
      {/*TopBar */}
      <div className=' bg-orange-500 flex  w-full h-5 justify-between items-center p-5'>
          {/*LeftTopBar */}
      <div className=' flex p-3 gap-5'>
        <p className='flex items-center gap-3'>Englishjjjjjjjj <IoIosArrowDown /></p>
        <p className='flex items-center gap-3'>Dollar <IoIosArrowDown /></p>
      </div>
      {/*RightTopBar */}
      <div className='flex gap-3'>
        <p>My Account</p>
        <p>Wishlist</p>
        <p>Checkout</p>
      </div>
      </div>
        {/*Navigations*/}
        <div className='bg-cyan-500 flex h-20 '>
         {/*LogoNav */}
         <div className='bg-white w-1/4 h-full text-cyan-400 flex justify-center items-center'><h1>LOGO</h1></div>
         {/*MainNav */}
         <div className='flex flex-col w-full'>
            {/*Navtools */}
            <div className='bg-red-500  h-2/3'>
              <p>ffkfkf</p>
            </div>
            {/*NavItems */}
            <div className='bg-white text-slate-700 px-5 flex gap-4 h-1/3'>
            <small className='flex items-center text-green-500 gap-1'>HOME <IoIosArrowDown /></small>
            <small className='flex items-center gap-1'>SHOP <IoIosArrowDown /></small>
            <small className='flex items-center gap-1'>PAGES <IoIosArrowDown /></small>
            <small  className='flex items-center gap-1'>BLOGS<IoIosArrowDown /></small>
            <small className='flex items-center'>CONTACT</small>
            </div>

         </div>

      </div>
     
    </div>
  )
}
