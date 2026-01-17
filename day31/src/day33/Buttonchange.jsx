import React, { useState } from 'react'

function Buttonchange() {
      const [text, setText] = useState("Show");

  return (
    <button onClick={() => 
      setText(text === "Show" ? "Hide" : "Show")
    }>
      {text}
    </button>
  );
}

export default Buttonchange