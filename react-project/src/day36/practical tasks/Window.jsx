import React, { useEffect, useState } from 'react'

function Window() {
    const[upd,setupd]=useState(window.innerWidth)
    useEffect(()=>{
        const handleResize=()=>{
            setupd(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        return()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])
  return (
    <div>
        window width:{upd}px
    </div>
  )
}

export default Window