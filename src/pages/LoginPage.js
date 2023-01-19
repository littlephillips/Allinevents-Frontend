import React, { useState }from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import  "../css/notification.css"


function LoginForm() {

  const navigate = useNavigate();

  const [error, setError] = useState(null)
  const [notification, setNotification] = useState(false)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function notifyUser(){
    setNotification((notification) => !notification);
    setTimeout(endNotification, 1000)
  }

  function submitHandler(e){
    e.preventDefault()
    setError(null)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    })
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          notifyUser();
          localStorage.setItem("jwt", user.jwt);
          localStorage.setItem("user", `${user.user_id}`);
        });
      } else {
        res.json().then((error) => setError(error));
      }
    })
  }

  function endNotification() {
    setNotification((notification) => !notification)
    navigate("/admin")
  }

 


  return (
    <div className="font-bold bg-[url('https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover min-h-screen flex flex-col items-center justify-center">
        <div class="w-full max-w-xs opacity-[80%]">

      {notification? (
        <div className='bookings-notification'>
          <p className="bookings-success">
          login successfull
          </p>
        </div>
      ) : null}  

        <form onSubmit={submitHandler}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">

            {error ? (
              <div className='errors-notification'>
                <p className="notification-errors">
                  {error.errors}
                </p>
              </div>
            ) : null}

          <div class="mb-4">
            <label class="block text-xl text-gray-700 font-bold mb-2" for="username">
              Username
            </label>
            <input
              class="font-bold font-secondary shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div class="mb-6">
            <label class="text-xl block text-gray-700  font-bold mb-2" for="password">
              Password
            </label>
            <input
              class="shadow appearance-none border font-bold border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p class="text-red-500 text-xs italic">Please enter your password.</p>
          </div>

          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
              Sign In
            </button>

            <NavLink  to="/signup"
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
              create account
            </NavLink>
          </div>
        </form>
      </div>
    </div>

  )
}

export default LoginForm
