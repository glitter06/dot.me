import React from 'react'
import  Logo  from '../assets/logo2.svg?react'
import  LogOut  from '../assets/log-out.svg?react'
import  Home_logo  from '../assets/home.svg?react'
import  ADD_notes  from '../assets/plus.svg?react'
import { Rootstate } from '../app/store'
import { useSelector } from 'react-redux'
const Navbar:React.FC = () => {
  const darkmode = useSelector((state:Rootstate) => state.Theme)
  return (
    <div className={`${darkmode && "dark"}`}>
    <nav className='flex flex-col justify-between items-center w-24 h-full p-4 shadow-xl fixed max-sm:w-16 bg-slate-50 dark:bg-Midnight-gray_600'>
      <div className='m-4 max-sm:m-0'>
      <Logo stroke={darkmode ? 'white' : 'black'} height={35} width={35} />
      </div>
      <div className='flex flex-col items-center'>
      <button className='p-3 max-sm:p-2 max-sm:w-16 hover:border-r-4 dark:border-indigo-500 border-indigo-900 w-24 flex justify-center ease-in duration-100'>
        <Home_logo stroke={darkmode ? 'white' : 'black'} />
        </button>
      <button className='p-3 max-sm:p-2 max-sm:w-16 w-24 flex justify-center hover:border-r-4 ease-in duration-100'>
        <ADD_notes stroke={darkmode ? 'white' : 'black'} />
      </button>
      </div>
      <button className='opacity-30 max-sm:p-0 p-2'>
         <LogOut stroke={darkmode ? 'white' : 'black'} />
      </button>
    </nav>
    </div>
  )
}


export default Navbar