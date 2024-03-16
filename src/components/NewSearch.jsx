import {data} from "../data"
import { useState } from "react"

import React from 'react'
// import { i } from "vite/dist/node/types.d-jgA8ss1A"

const NewSearch = () => {
    // console.log(data);
    const[search,setsearch]=useState('')
    console.log(search);

  return (
    <div className="px-[450px] my-4 gap-2">
       <h1 className="text-center mt-4">Contact Keeper</h1>
       <form className="my-3 p-5 m-5">
           <input onChange={(e)=>setsearch(e.target.value)} type="text" placeholder="search contacts"></input>
       </form>
       <table className="border border-black p-4">
           <thead className="border border-black p-4">
               <tr >
                   <th className="border border-black">First name</th>
                   <th className="border border-black">last name</th>
                   <th className="border border-black">Email</th>
                   <th className="border border-black">Phone</th>
                  
               </tr>
           </thead>
           <tbody className="border border-black">
           {data.filter((item)=>{
               return search.toLowerCase()==='' ? item : item.first_name.toLowerCase().includes(search)

           }).map((item)=>(
            <tr key={item.id}className="border border-black">
                   <th className="border border-black" >{item?.first_name}</th>
                   <th className="border border-black">{item.last_name}</th>
                   <th className="border border-black">{item.email}</th>
                   <th className="border border-black">{item.phone_no}</th>
                  
               </tr>

           ))}
          
           </tbody>
       </table>


    </div>
  )
}

export default NewSearch