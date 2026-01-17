import React, { useState } from 'react'

function Dark() {
    const [isDark,setisDark]=useState(false)
  return (
    <>
    <div>Dark</div>
    <div style={{width:100, height:100, backgroundColor: isDark? "white":"black",color: isDark? "white":"black"}}>
        <h2>{isDark? "dark Mode":"Light Mdoe"}</h2>
        <button onClick={()=> setisDark(!isDark)}>
            {isDark? "Light":"Dark"}
        </button>
    </div>
    </>
  )  
}

export default Dark