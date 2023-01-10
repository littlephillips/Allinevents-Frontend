import React from 'react'
import '../css/SignupPage.css'

function SignupPage() {
  return (
    <form className='min-h-screen flex flex-col  items-center h-[410px] w-1/2 md:w-3/4 sm:w-screen sm:items-center sm:flex sm:justify-center sm:h-[700px] '>
      <div class="form" className='bg-[#FFBD1D] rounded-md p-6  '>
      <div class="title" className='text-white text-2xl font-bold mt-3 sm:text-xl'>Welcome</div>
      <div class="subtitle" className='text-white text-sm font-semibold mt-2'>Let's create your account!</div>
      <div class="input-container ic1" className=' relative  mt-10'>
        <input id="firstname" class="input" type="text" placeholder="First Name " />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>
      <div class="input-container ic2" className=''>
        <input id="lastname" class="input" type="text" placeholder="Last Name " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Last name</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder="Email " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <div class="input-container ic2">
      <input id="password" class="input" type="password" placeholder="Password " />
      <div class="cut"></div>
        <label for="Password" class="placeholder">Password</label>
      </div>
      <div class="input-container ic2">
      <input id="password" class="input" type="password" placeholder="Password " />
      <div class="cut"></div>
        <label for="Password" class="placeholder">Confirm Password</label>
      </div>
      <button type="text" class="submit" className='bg-[#2596BE] rounded-md box-border cursor-pointer text-2xl h-[46px] mt-10 text-center px-2 '>submit</button>
    </div>
    </form>
  )
}

export default SignupPage