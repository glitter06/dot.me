import React from 'react'
import  Search  from '../assets/search.svg?react'
import  Moon  from '../assets/moon.svg?react'
import Sun from '../assets/sun.svg?react'
import { useDispatch, useSelector } from 'react-redux'
import { Rootstate } from '../app/store'
import { handleToggle } from '../Slices/Themeslice.ts'


const SearchBar:React.FC = () => {
  const darkmode = useSelector((state:Rootstate) => state.Theme)
  const dispatch  = useDispatch();
  return (
    <div className={`${darkmode && "dark"}`}>
    <div className='flex mt-10 max-sm:mt-5'>
        <button type='button'>
          <Search className=' max-[320px]:w-4' width={18} stroke='grey'/>
        </button>
        <input className=' px-3 max-lg:w-[25rem] max-xl:w-[45rem] max-sm:max-w-[15rem] max-[320px]:max-w-[10rem] w-[55rem] max-[320px]:text-sm text-lg focus:outline-none dark:bg-Midnight-gray_800' type="search" name="search-panel"  placeholder='Search Notes' />
        <button type='button' onClick={() => dispatch(handleToggle())} >
          {darkmode ? <Sun width={18} className=' max-[320px]:w-4' stroke='gray'/> : <Moon className='max-[320px]:w-4' width={18} stroke='grey'/> }
          </button>
    </div>
    </div>
  )
}

export default SearchBar