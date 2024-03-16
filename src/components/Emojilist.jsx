import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Emojiitem from './Emojiitem'
import Searchbar from './Searchbar'
import Search from './Search'
import Shimmer from './Shimmer'

const Emojilist = () => {
    const [emojis,setemojis]=useState([])
    const[filteremojies,setfilteremojies]=useState([])
    const[search,setsearch]=useState('')
    console.log(search);

    useEffect(()=>{
       
        const fetchemojis=async()=>{
            const res=await fetch("https://emoji-api.com/emojis?access_key=9e08d553159f81c2d8d1b2d7d885169fbef09391")
            const json=await res.json();   
            console.log(json);      
            setemojis(json)    
        }
        fetchemojis()
    },[])

    // const handlesearch=(term)=>{
    //     const filtered=emojis.filter((emojis)=>
    //         emojis.character.toLowerCase().includes(term.toLowerCase())
    //     )
    //     setfilteremojies(filtered)  
    // }
    if(emojis.length==0){
      return <Shimmer/>
    }
  return (
    <div >
     

         {/* <Searchbar/> */}
          <input onChange={(e)=>setsearch(e.target.value)} className='border rounded-xl p-3 w-[300px] mx-10 border-black' type="text"
        placeholder='Search emojis...'
              
        ></input>
        
         <div className='flex flex-wrap mt-5 px-4'>
              {emojis.filter((item)=>{
                  return search.toLowerCase()=== '' ? item : item.subGroup.toLowerCase().includes(search)
              }).map((emoji)=>(
            <Emojiitem  key={emojis.id}  emojis={emoji}/>
           
         ))}
         </div>
        

        



        
         
     
    
     </div>
   
  )
}

export default Emojilist