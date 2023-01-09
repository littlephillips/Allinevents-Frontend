import React from 'react'

function LoginForm() {
  return (
    <div className='flex min-w-full bg-slate-400 flex-col min-h-screen items-center justify-center'>   

      <form className='flex flex-col p-10 text-white bg-slate-700 rounded-md shadow-sm'>
        <h2 className='text-center text-2xl mb-5 m-auto '>Login</h2>
        
        <div>
          <label>Email</label>
          <br />
            <input 
              placeholder='email'
              className='focus:outline-blue-600 text-black' 
              type="email" 
              name='email' 
              required=''
            
            />
        </div>

        <div className='py-4'>
          <label>Password</label>
            <br />
          <input
            className='text-black'
            type="password" 
            name='password' 
            required=''
            
          />
        </div>
        <br />

        <button className='w-16 p-2 rounded-md bg-slate-500'>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>

      </form>
    </div>
  )
}

export default LoginForm