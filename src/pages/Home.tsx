import React from 'react'
import {SearchBar, NoteCard} from "../Components/index2"
import { useSelector } from 'react-redux'
import { Rootstate } from '../app/store'
const Home:React.FC = () => {
  const user  = "Sam"
  const darkmode = useSelector((state:Rootstate) => state.Theme)
  return (
    <div className={`${darkmode && 'dark'} w-full h-full`}>
    <main className='w-full h-full dark:bg-Midnight-gray_800'>
      <header className=' relative max-lg:inset-x-36 max-sm:inset-x-24 inset-x-56'>
        <SearchBar/>
        <h2 className='font-ubuntu text-3xl mt-10 max-sm:text-2xl max-sm:mt-5 text-wrap dark:text-white'>Sup, <span className=' text-indigo-500 dark:text-indigo-200'>{user}!👋🏻</span></h2>
        <p className='opacity-90 text-wrap dark:text-white'>All your notes are here, in one place!</p>
      </header>
      <div className=' mt-10 relative inset-x-56 max-lg:inset-x-36 max-sm:inset-x-24 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2 w-fit'>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
      </div>
    </main>
  </div>
  )
}

export default Home