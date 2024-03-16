import { useState } from 'react'
import Emojilist from './components/Emojilist';
// import Searchbar from './components/Searchbar';
import NewSearch from './components/NewSearch';
import Search from './components/Search';


function App() {


  return (
    
   <div className='flex flex-col'>
    {/* <NewSearch/> */}
    
   <div className="flex flex-col items-center shadow-2xl py-10 m-[30px] bg-orange-100 ">
   <h1 className='font-serif text-3xl bold '>This Is Emoji Search App</h1>
   </div>
     
    
      {/* <Searchbar onSearch={handleSearch }/> */}
      <Emojilist />
     
   </div>
    
     

  )
}

export default App
