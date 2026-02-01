import React from 'react'

function Profile() {
  return (
    <div>
        <form className='w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4 text-black'>
            <div className='flex flex-row gap-1'>
                <label htmlFor="">name</label>
                <input type="text" name='name' required className='rounded-lg border-black'/>
            </div>
            <div>
                <label htmlFor="">email</label>
                <input type="email" name='email' required />
            </div>
            <div>
                <label htmlFor="">phone</label>
                <input type="number" name='phone' required />
            </div>
            <div>
                <label htmlFor="">address</label>
                <input type="address" name='address'  required/>
            </div>
            <div>
                <label htmlFor="">upload your resume</label>
                <input type="color" name="color" id="" />
            </div>
        </form>
    </div>
  )
}

export default Profile