import React from 'react'

function NavbarItem({Items}){
  return (
    <div className='text-white flex items-center gap-3 text-[15px] 
    font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>
        <Items.icon/>
        <h2>{Items.name}</h2>
    </div>
  )
}

export default NavbarItem