import React from 'react'
import { NavLink } from 'react-router-dom'

const GreetingPage = () => {
  return (
    <main>
      <div>Привіт</div>
      <NavLink to="/money-city">
        Давай спочатку прочитаємо інструкцію
      </NavLink>
    </main>
  )
}

export default GreetingPage
