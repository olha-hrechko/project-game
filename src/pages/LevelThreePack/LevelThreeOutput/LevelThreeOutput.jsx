import React from 'react'
import { NavLink } from 'react-router-dom'

const LevelThreeOutput = () => {
  return (
    <div>
      <h2>LevelThreeOutput</h2>
      <NavLink to="/level-four">Next Level</NavLink>
    </div>
  )
}

export default LevelThreeOutput
