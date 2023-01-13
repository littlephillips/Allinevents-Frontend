import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function SignupPage() {

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(false)

  const [username, setUserName] = useState("")
  const  [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  function handleNotification(){
    setNotification((notification) => !notification);
    setTimeout(endNotification, 1000)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("/admins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, email, password
      }),
    })
    .then((res) => {
      if (res.ok){
        res.json().then((user) => handleNotification());
      } else {
        res.json().then((error) => setError(error))
      }
    });
  }

  function endNotification(){
    setNotification((notification) => !notification);
    navigate("/login")
  }

  return (
    <div className='min-h-screen bg-slate flex flex-col items-center justify-center'>
        <div class="w-full max-w-xs ">

          {notification ? (
            <p className='signup-success'>
              signup successfull
            </p>
          ) : null }


        <form onSubmit={handleSubmit}
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          {error ? 
          <p className="error-signup">{error.errors}</p>
          : null }
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              name="username" 
              type="text" 
              required= "required"
              value={username}
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              name="Email" 
              required="required"
              autoComplete="off"
              type="email" 
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          {/* <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
              Last Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
          </div> */}

          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              name="password" 
              type="password" 
              value={password}
              required="required"
              autoComplete='off'
              placeholder="*******" 
              onChange={(e) => setPassword(e.target.value)}
            />

            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>

          {/* <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <p class="text-red-500 text-xs italic">Confirm password.</p>
          </div> */}

          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit">   Sign Up    </button>

            {/* {error.map((error) => (
              <p key={error}>{error}</p>
            ))} */}

            < NavLink to="/login"
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >              
              Have an account?
            </NavLink>

          </div>
        </form>

        <div className="loader"></div>
      </div>
    </div>

  )
}

export default SignupPage