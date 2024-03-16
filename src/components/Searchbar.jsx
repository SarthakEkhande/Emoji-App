import React from 'react'
import { useState } from 'react'

const Searchbar = ({onSearch}) => {
    const [searchterm,setsearchterm]=useState('')

    const handlechange=(e)=>{
        setsearchterm(e.target.value)
        onSearch(e.target.value)
        console.log(e.target.value);
        

    }
    
  return (
    <div className=' '>
        <input className='border p-1 mx-10 border-black' type="text"
        placeholder='Search emojis...'
        value={searchterm}
        onChange={handlechange}
        ></input>
        <button onClick={handlechange} className='border p-1 mx-20 border-black' type="text">Search</button>
    </div>
  )
}

export default Searchbar