import React from 'react'
import { FiHome } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";


function Navigation({setOpenSetting}) {
  return (
    <nav className="pt-5 text-white flex justify-between w-11/12 mx-auto">
        <div className="flex items-center gap-1">
            <FiHome className="text-sm"/>
            <h1> Animedoro Focus </h1>
        </div>
        <FiSettings className="text-2xl cursor-pointer" onClick={()=>setOpenSetting(value=>!value)}/>
    </nav>
  )
}

export default React.memo(Navigation);
