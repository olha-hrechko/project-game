import React from 'react'
import { NavLink } from 'react-router-dom';


const LevelOne = () => {
  return (
    <div>
      <h2>Рівень Один</h2>
      <p>Знайомимося з грошима</p>
      <div>
        <h4>Гроші</h4>
        <p>Опис грошей</p>
      </div>
      <div>
        <h4>Кишенькові гроші</h4>
        <p>Опис Кишенькових грошей</p>
      </div>
      <div>
        <h4>Ціна</h4>
        <p>Опис Ціни</p>
      </div>
      <div>
       <NavLink to="/scenario-level-one">Перейти до сценарію</NavLink>
      </div>
    </div>

  )
}

export default LevelOne
