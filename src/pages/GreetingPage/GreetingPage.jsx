import React from 'react'
import { NavLink } from 'react-router-dom'

const GreetingPage = () => {
  return (
    <main>
      <h1>Greeting!</h1>
      <NavLink to="/money-city">
        Start Game
      </NavLink>
    </main>
  )
}

export default GreetingPage
