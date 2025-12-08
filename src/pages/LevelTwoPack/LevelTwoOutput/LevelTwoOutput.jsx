import React from 'react'
import { NavLink } from 'react-router-dom'

const LevelTwoOutput = () => {
  return (
    <div>
      <h2>LevelTwoOutput</h2>
      <NavLink to="/level-three">Next Level</NavLink>
    </div>
  )
}

export default LevelTwoOutput
