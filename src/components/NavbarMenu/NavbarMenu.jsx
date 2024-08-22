import React from 'react'
import "./NavbarMenu.css"

const NavbarMenu = ({menu,setmenu}) => {
  return (
    <div onClick={()=>{
      setmenu(!menu)
    }} className='duration-300 cursor-pointer  h-[50px] flex items-center justify-center gap-2'>
     <div className={`${menu? "bg-white" : "bg-[#8000ff]"} ${!menu? "dot-active": "dot-inactive"} dot md:w-[20px] md:h-[20px] md:rounded-[50px] rounded-[100px] w-[15px] h-[15px]  relative ${menu? "bottom-[16px]" : "bottom-0"}`}></div>
     <div className={`${menu? "bg-white" : "bg-[#8000ff]"} ${!menu? "dot-active": "dot-inactive"} dot md:w-[20px] md:h-[20px] md:rounded-[50px] rounded-[100px] w-[15px] h-[15px] `}></div>
     <div className={`${menu? "bg-white" : "bg-[#8000ff]"} ${!menu? "dot-active": "dot-inactive"} dot md:w-[20px] md:h-[20px] md:rounded-[50px] rounded-[100px] w-[15px] h-[15px]`}></div>
    </div>
  )
} 

export default NavbarMenu
