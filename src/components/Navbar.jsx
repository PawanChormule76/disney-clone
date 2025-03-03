import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import profileLogo from '../assets/images/profile_logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import NavbarItem from './NavbarItem'

const Navbar = () => {

  const [toggle,setToggle]=useState(false);
  const menu=[
    {
      name:'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      name:'ORIGINALS',
      icon:HiStar
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle
    },{
      name:'SERIES',
      icon:HiTv
    },
  ]
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex gap-8 items-center'>
        <img  src={logo} alt='logo' className='w-[80px] md:w-[115px] object-cover'/>
        <div className='hidden md:flex gap-8'>
          {menu.map((Items) => (
            <NavbarItem name={Items.name} Icon={Items.icon}/>
          ))}
        </div>
          <div className='flex md:hidden gap-5'>
            {menu.map((Items,index) => index<3&&(
              <NavbarItem name={''} Icon={Items.icon}/>
            ))}
            <div className='md:hidden' onClick={()=>(setToggle(!toggle))}>
              <NavbarItem name={''} Icon={HiDotsVertical}/>
              {toggle ?<div className='absolute mmt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                {menu.map((Items,index) => index>2&&(
                  <NavbarItem name={Items.name} Icon={Items.icon}/>
                ))}
              </div>:null}
            </div>
          </div>
      </div>
      <img src={profileLogo} alt='profile_logo' className='w-[40px] rounded-full hover:cursor-pointer mr-5 scale-125'/>
    </div>
  )
}

export default Navbar