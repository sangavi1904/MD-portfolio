import React from 'react'
import Arrow from '../Assets/images/icons8-Uparrow.png'

function Scroll() {
    let scrollToTop =()=>{
     window.scrollTo(0,0)
     }
   return (
     <div>
         <button onClick={scrollToTop} className='position-fixed end-0 bottom-0 px-3 py-2 m-2 z-3 rounded-circle border-0 arrow'>
        <img src={Arrow} alt="" />
         </button>
     </div> 
   )
 }

export default Scroll