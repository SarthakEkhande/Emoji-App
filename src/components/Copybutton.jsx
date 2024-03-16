
import React from 'react'
import copy from 'copy-to-clipboard';

const Copybutton = ({text}) => {

    const handlecopy=()=>{
        copy(text)
        alert(`Copied: ${text}`);
    }
  return (
    <div  className="mt-4">
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlecopy}>
            Copy
        </button>
    </div>
  )

}

export default Copybutton