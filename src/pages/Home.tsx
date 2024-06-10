import React from 'react';
import { SearchBar, NoteCard } from '../Components/index2';
import { useSelector } from 'react-redux';
import { Rootstate } from '../app/store';
const Home: React.FC = () => {
  const user = 'Sam';
  const darkmode = useSelector((state: Rootstate) => state.Theme);
  const Todos = useSelector((state: Rootstate) => state.Todo.todos);
  return (
    <main className={`${darkmode && 'dark'} w-full min-h-dvh dark:bg-Midnight-gray_800 py-10 px-26 md:px-36 lg:px-56 flex flex-col gap-10`}>
      <header>
        <SearchBar />
        <h2 className='font-ubuntu text-3xl mt-10 max-sm:text-2xl max-sm:mt-5 text-wrap dark:text-white'>
          Sup, <span className=' text-indigo-500 dark:text-indigo-200'>{user}!👋🏻</span>
        </h2>
        <p className='opacity-90 text-wrap dark:text-white'>All your notes are here, in one place!</p>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 w-fit grow'>
        {Todos.map((todo) => (
          <NoteCard key={todo.id} Date={todo.Date} />
        ))}
      </div>
    </main>
  );
};

export default Home;
