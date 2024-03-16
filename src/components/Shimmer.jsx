import React from 'react'


const Shimmer = () => {
    const rendercard=()=>{
        const cards=[];
        const count=150
         if(count>0){
        for(let i=0;i<count;i++){
            cards.push(
            <div >
               <p id="card"  key={i}>
              </p>
            </div>
            )

        }
    }
        return cards
    }
  return (
    <div className="items-center top-3  shadow-lg">
     <input onChange={(e)=>setsearch(e.target.value)} className='border rounded-xl p-3 w-[300px] mx-10 border-black' type="text"
        placeholder='Search emojis...'
              
        ></input>
       <div id="container" >
        <div id="maincard">
        <div></div>
      
        </div>
      
      
        <p id="cards">{rendercard()}</p>

        </div>
    </div>
    
  )
  
}

export default Shimmer