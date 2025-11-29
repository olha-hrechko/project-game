import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx';

const Homepage = () => {
  const {user} = useUser();
  return (
    <main>
      <section>
        {!user &&<NavLink to="/signup">Create profile</NavLink>}
        {user &&<NavLink to="/greeting">Start game</NavLink>}
      </section>
    </main>
  )
}

export default Homepage
