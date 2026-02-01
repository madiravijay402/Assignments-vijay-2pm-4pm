import React, { useState } from 'react'

function Check() {
//     const[upd,updset]=useState({csk:false,mi:false,others:false})
//     const handlechange=(e)=>{
//         updset(...upd,[e.target.checked]:e.target.)
//     }
//   return (
//     <div>
//         <form>
//             <label htmlFor="">csk</label>
//             <input type="checkbox" checked={isChecked} />
//             <label htmlFor="">Mumbai inidans</label>
//             <input type="checkbox" checked={isChecked} />
//             <label htmlFor="">rcb</label>
//             <input type="text" checked={isChecked} />
//         </form>
//         <p></p>
//     </div>
//   )
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='card'>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <p>{isChecked ? "csk" : "mumbai"}</p>
    </div>
  ); 
}

export default Check