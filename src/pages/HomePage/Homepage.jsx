import React from 'react'
import { NavLink } from 'react-router-dom'

const Homepage = () => {
  return (
    <main>
      <section>
        <NavLink to="/auth">Create profile</NavLink>
      </section>
    </main>
  )
}

export default Homepage
