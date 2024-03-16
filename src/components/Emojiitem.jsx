import React from 'react'
import Copybutton from './Copybutton'


const Emojiitem = ({emojis}) => {
    // console.log(emojis);

    
  return (
    <div className="flex flex-col items-center border border-black rounded-2xl p-2 mx-5  mb-5 mr-3">
        <p className="text-2xl" title={emojis.subGroup}>{emojis.character}</p>
        {/* <p className="text-2xl ">{emojis.subGroup}</p> */}

        <Copybutton  text={emojis.character}/>
    </div>
  )
}

export default Emojiitem