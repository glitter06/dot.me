import React from 'react'
import { useSelector } from 'react-redux'
import { Rootstate } from '../app/store'

const NoteCard:React.FC = () => {
  const darkmode = useSelector((state:Rootstate) => state.Theme)
  return (
  <div className={`${darkmode && 'dark'}`}>
    <div className='max-xl:w-48 h-64 w-64 p-2 bg-customYellow-light dark:backdrop-blur-lg dark:bg-customYellow-light/40 rounded-xl'>
        <textarea
        className='font-ubuntu p-2 text-lg resize-none w-full max-xl:h-38 h-48 bg-transparent focus:outline-none overflow-hidden dark:text-white'
        name="noteContent"
        placeholder='Type your note...'
        rows={10}
        cols={30}
        />
        <p className='m-2 opacity-50 dark:text-white'>May, 27 2024</p>
    </div>
  </div>
  )
}

export default NoteCard