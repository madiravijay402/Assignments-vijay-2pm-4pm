import React from 'react'

function Sign() {
  return (
    <div className='flex justify-start '>
        <form action="">
            <label htmlFor="">email</label>
            <input type="email" />
            <label htmlFor="">password</label>
            <input type="password" />
            <button type='submit'>login</button>
            <div>
                <div><a href="">signup</a></div>
                <div><a href="">signin</a></div>
            </div>
        </form>
    </div>
  )
}

export default Sign