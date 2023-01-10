import React from 'react'
import '../css/LoginPage.css'

function LoginForm() {
  return (
    <form class="form" className='min-h-screen w-full flex flex-col justify-center items-center  '>
      <div class="form" className='bg-[#FFBD1D] w-1/4 rounded-md box-border h-3/4 sm:h-3/4 p-5  md:w-3/4 '>
      <div class="title" className='text-white text-2xl font-bold mt-3'>Welcome</div>
      <div class="subtitle" className='text-white text-sm font-semibold mt-2'>Enter your details below</div>
      <div class="input-container ic1" className=' relative  mt-10'>
      <input id="email" class="input" type="text" placeholder="Email " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
        
      </div>
    <div class="input-container ic2">
      <input id="password" class="input" type="password" placeholder="Password " />
        <div class="cut cut-short"></div>
        <label for="Password" class="placeholder">Password</label>
        </div>
      <button type="text" class="submit" className='bg-[#2596BE] rounded-md box-border cursor-pointer text-2xl h-[46px] mt-8 text-center px-1 sm:flex justify-items-center items-center'>submit</button>
    </div>
    </form>
    
  )
}

export default LoginForm